// src/services/authService.js
const API_BASE_URL = 'http://localhost:8080/api';

export const authService = {
  async login(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      
      const data = await response.json();
      localStorage.setItem('authToken', data.token);
      return data;
    } catch (error) {
      throw error;
    }
  },

  async register(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  logout() {
    localStorage.removeItem('authToken');
  },

  isAuthenticated() {
    return localStorage.getItem('authToken') !== null;
  },

  getAuthToken() {
    return localStorage.getItem('authToken');
  }
};