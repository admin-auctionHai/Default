import React, { createContext, useState, useContext, useEffect, act } from 'react';
import axios from 'axios';
import { bidderPermissions, vendorPermissions, basicUserPermission, checkPermission } from './permissions'; // Import the permissions

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: "http://0.0.0.0:8080/api",
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

interface LocationInfo {
  address: string;
  city: string;
  state: string;
  postalCode: string;
  phoneNumber: string;
  country?: string; // Optional field for country
}

interface CompanyInfo {
  companyName : string;
  companyRegNumber : string;
  companyPan_tan : string;
  companyAddress : string;
  companyCity : string;
  companyState : string;
  companyPostalCode : string;
  companyEmailAddress?: string;
}

interface UserInfo {
  id: string;
  username: string;
  email: string;
  userType: 'BIDDER' | 'VENDOR'; // Add userType to UserInfo
  locationInfo : LocationInfo;
  companyInfo : CompanyInfo;
}

interface Permissions {
  [key: string]: {
    view?: boolean;
    edit?: boolean;
    create?: boolean;
    delete?: boolean;
    bid?: boolean;
    purchase?: boolean;
    sell?: boolean;
  };
}

interface AuthContextType {
  isLoggedIn: boolean;
  currentUser: UserInfo | null;
  permissions: Permissions;
  login: (credentials: { loginId: string; password: string }) => Promise<boolean>;
  signup: (signupData: any) => Promise<boolean>;
  logout: () => void;
  checkPermission: (resource: string, action: string) => boolean;
  getCurrUserInfo: () => UserInfo | null;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  currentUser: null,
  permissions: {},
  login: async () => false,
  signup: async () => false,
  logout: () => {},
  checkPermission: () => false,
  getCurrUserInfo: () => null
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);
  const [permissions, setPermissions] = useState<Permissions>({});
  const [tokenExpiry, setTokenExpiry] = useState<number | null>(null);

  // Load appropriate permissions based on user type
  const loadUserPermissions = (userType: 'BIDDER' | 'VENDOR') => {
    const userPermissions = userType === 'BIDDER' ? bidderPermissions : vendorPermissions;
    setPermissions(userPermissions);
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('authToken');
      const storedExpiry = localStorage.getItem('tokenExpiry');

      if (storedUser && storedToken && storedExpiry) {
        const currentTime = Date.now();
        const expiry = parseInt(storedExpiry, 10);

        if (currentTime < expiry) {
          const user = JSON.parse(storedUser);
          setIsLoggedIn(true);
          setCurrentUser(user);
          loadUserPermissions(user.userType); // Load permissions based on user type
          setTokenExpiry(expiry);
        } else {
          logout();
        }
      }
    };

    checkLoginStatus();
  }, []);

  const login = async (credentials: { loginId: string; password: string }): Promise<boolean> => {
    try {
      const response = await api.post('/auth/login', credentials);
      console.log(response);
      response.data['locationInfo'] = {
        address: "Near Puri road",
        city : "jalvapur",
        state : "HimPradesh",
        postalCode : "1-618",
        phoneNumber : "8989897654"
      }
      const { loginId, name, accessToken,refershToken, userType,userDetails, locationInfo, userCompanyDetails } = response.data;
      const expiresIn = 86400000;

      // Create user object with userType
      const user: UserInfo = {
        id: loginId,
        username: name,
        email: credentials.loginId,
        userType: userType as 'BIDDER' | 'VENDOR',
        locationInfo : locationInfo,
        companyInfo : userCompanyDetails
      };
      console.log("User is logged in :",user);
      const expiry = Date.now() + expiresIn * 1000;

      // Load and store permissions based on user type
      loadUserPermissions(user.userType);

      // Store user data and token
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('authToken', accessToken);
      localStorage.setItem('refreshToken',refershToken);
      localStorage.setItem('tokenExpiry', expiry.toString());

      setIsLoggedIn(true);
      setCurrentUser(user);
      setTokenExpiry(expiry);

      return true;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  };

  const signup = async (signupData: any): Promise<boolean> => {
    try {
      const response = await axios.post('/api/signup', signupData);
      const { user, token, expiresIn } = response.data;

      const expiry = Date.now() + expiresIn * 1000;

      // Load permissions based on user type from signup
      loadUserPermissions(user.userType);

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('authToken', token);
      localStorage.setItem('tokenExpiry', expiry.toString());

      setIsLoggedIn(true);
      setCurrentUser(user);
      setTokenExpiry(expiry);

      return true;
    } catch (error) {
      console.error('Signup failed', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('tokenExpiry');

    setIsLoggedIn(false);
    setCurrentUser(null);
    setPermissions({});
    setTokenExpiry(null);
  };

  // Updated checkPermission function using the imported checkPermission
  const checkUserPermission = (resource: string, 
    action: string
  ): boolean => {
    if (!currentUser || !resource || !action) {
      if (!currentUser) {
        setPermissions(basicUserPermission);  // Assuming this updates permissions for basic user
        if (basicUserPermission[resource]) {
          return checkForUnregisteredUser(resource,action as any);
        }
      }
      return false;
    }
    return checkPermission(currentUser.userType, resource, action as any);
  };

  const checkForUnregisteredUser = (resource : string, 
    action : 'view' | 'create' | 'edit' | 'delete' | 'bid' | 'purchase' | 'sell'
  ):boolean => {
    if(resource && action){
      return basicUserPermission[resource]?.[action] || false;
    }
    return false;
  }

  const getCurrUserInfo = (): UserInfo | null => {
    return currentUser;
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isLoggedIn, 
        currentUser, 
        permissions, 
        login, 
        signup, 
        logout, 
        checkPermission: checkUserPermission, 
        getCurrUserInfo 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};