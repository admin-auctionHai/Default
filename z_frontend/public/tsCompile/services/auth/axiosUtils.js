var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
export const createAxiosInstance = (navigate) => {
    const axiosInstance = axios.create({
        baseURL: process.env.BACKEND_API_BASE_URL + ":" + process.env.BACKEND_API_PORT
    });
    axiosInstance.interceptors.request.use((config) => __awaiter(void 0, void 0, void 0, function* () {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                yield axiosInstance.post('/auth/validate-token', { token });
                config.headers['Authorization'] = `Bearer ${token}`;
                return config;
            }
            catch (validationError) {
                try {
                    const refreshToken = localStorage.getItem('refreshToken');
                    const response = yield axiosInstance.post('/auth/refresh', { refreshToken });
                    const { accessToken, refreshToken: newRefreshToken } = response.data;
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', newRefreshToken);
                    config.headers['Authorization'] = `Bearer ${accessToken}`;
                    return config;
                }
                catch (refreshError) {
                    localStorage.clear();
                    if (navigate) {
                        navigate('/login');
                    }
                    else {
                        window.location.href = '/login';
                    }
                    return Promise.reject(refreshError);
                }
            }
        }
        return config;
    }), (error) => Promise.reject(error));
    axiosInstance.interceptors.response.use((response) => response, (error) => {
        var _a;
        if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 401) {
            localStorage.clear();
            navigate ? navigate('/login') : window.location.href = '/login';
        }
        return Promise.reject(error);
    });
    return axiosInstance;
};
