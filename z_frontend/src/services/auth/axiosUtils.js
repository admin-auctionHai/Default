import axios from 'axios';

class ApiService {
  constructor(baseURL = 'http://0.0.0.0:8080/api') {
    this.instance = axios.create({ baseURL });
    this.setupInterceptors();
  }

  setupInterceptors() {
    // Request Interceptor
    this.instance.interceptors.request.use(
      async (config) => {
        const token = localStorage.getItem('accessToken');
        if (!token) return config;

        try {
          // Validate existing token
          await this.instance.post('/auth/token/validate-token', { token });
          return this.attachToken(config, token);
        } catch (error) {
          // Token invalid, try refresh
          return this.handleTokenRefresh(config);
        }
      },
      (error) => Promise.reject(error)
    );

    // Response Interceptor
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.clear();
          console.log("Error code 401 is received");
          this.redirectToLogin();
        }
        return Promise.reject(error);
      }
    );
  }

  async handleTokenRefresh(config) {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await this.instance.post('/auth/token/refresh', { refreshToken });
      
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      
      return this.attachToken(config, data.accessToken);
    } catch (error) {
      localStorage.clear();
      this.redirectToLogin();
      return Promise.reject(error);
    }
  }

  attachToken(config, token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    };
  }

  redirectToLogin() {
    const loginPath = '/auth/login';
    if (window.navigate) {
      window.navigate(loginPath);
    } else {
      window.location.href = loginPath;
    }
  }

  // Helper methods for making requests
  get(url, config = {}) {
    return this.instance.get(url, config);
  }

  post(url, data = {}, config = {}) {
    console.log("Here Post method is called");
    return this.instance.post(url, data, config);
  }

  put(url, data = {}, config = {}) {
    return this.instance.put(url, data, config);
  }

  delete(url, config = {}) {
    return this.instance.delete(url, config);
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;