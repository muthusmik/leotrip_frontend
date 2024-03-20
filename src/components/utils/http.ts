import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

interface HTTPService {
    token: string;
    get: (url: string, config?: AxiosRequestConfig) => Promise<any>;
    post: (url: string, data: any, config?: AxiosRequestConfig) => Promise<any>;
    put: (url: string, data: any, config?: AxiosRequestConfig) => Promise<any>;
    patch: (url: string, data: any, config?: AxiosRequestConfig) => Promise<any>;
}

const useHTTPService = (url?: string): HTTPService => {
    const [token, setToken] = useState<string>('');
    const API_URL = url || 'http://192.168.1.34:9999/api/';

    useEffect(() => {
        setToken(localStorage.getItem('token') || '');
        axios.defaults.baseURL = API_URL;
        axios.defaults.headers.common.Accept = 'application/json';
        axios.defaults.headers.common.Authorization = token ? `Bearer ${token} ` : '';
    }, [token]);

    const handleSuccess = (response: AxiosResponse) => {
        return response.data;
    };

    const handleError = (error: any) => {
    console.log("api error",error)
        throw error;
    };

    const get = (url: string, config?: AxiosRequestConfig) => {
        return axios.get(url, config ).then((res) => handleSuccess(res)).catch(handleError);
    };

    const post = (url: string, data: any, config?: AxiosRequestConfig) => {
        return axios.post(url, data, config).then((res) => handleSuccess(res)).catch(handleError);
    };

    const put = (url: string, data: any, config?: AxiosRequestConfig) => {
        return axios.put(url, data, config).then((res) => handleSuccess(res)).catch(handleError);
    };

    const patch = (url: string, data: any, config?: AxiosRequestConfig) => {
        return axios.patch(url, data, config).then((res) => handleSuccess(res)).catch(handleError);
    };

    return {
        token,
        get,
        post,
        put,
        patch,
    };
};

export default useHTTPService;
