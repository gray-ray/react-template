import axios, { AxiosRequestConfig, HttpStatusCode } from 'axios';
// import router from "@/router/index";
// import { message, notification } from "ant-design-vue";

const APP_TOKEN = 'APP_TOKEN';

export const getToken = () => localStorage.getItem(APP_TOKEN);
export const setToken = (val: string) => localStorage.setItem(APP_TOKEN, val);
export const removeToken = () => localStorage.removeItem(APP_TOKEN);

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 全局请求缓存（用于取消重复请求）
const pendingRequests = new Map<string, AbortController>();

/**
 * 添加请求到 Map
 */
const addPendingRequest = (config: AxiosRequestConfig) => {
  if (!config.url) return;

  const controller = new AbortController();
  config.signal = controller.signal;

  if (pendingRequests.has(config.url)) {
    const prevController = pendingRequests.get(config.url);
    prevController?.abort(); // 取消上一次请求
  }

  pendingRequests.set(config.url, controller);
};

/**
 * 移除请求
 */
const removePendingRequest = (config: AxiosRequestConfig) => {
  if (!config.url) return;
  pendingRequests.delete(config.url);
};

/**
 * 统一封装 axios 请求
 */
const request = <T>(
  url: string,
  options: AxiosRequestConfig & { throttle?: boolean }
): Promise<T> => {
  const config: AxiosRequestConfig = { ...options, url };

  if (!options.throttle) {
    addPendingRequest(config);
  }

  return http(config);
};

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    removePendingRequest(response.config);
    return response?.data;
  },
  (error) => {
    removePendingRequest(error.config);

    // 业务错误
    if (
      error.response?.status >= HttpStatusCode.BadRequest &&
      error.response?.status < HttpStatusCode.InternalServerError
    ) {
      // message.error(error.response?.data?.message);
    }

    // 登录过期
    if (error.response?.status === HttpStatusCode.Unauthorized) {
      removeToken();
      // router.push("/login");
    }

    // 服务器错误
    if (error.response?.status >= HttpStatusCode.InternalServerError) {
      // notification.error({
      //   message: error.response?.status,
      //   description: error.response?.data?.message,
      // });
    }

    return new Error(error);
    throw new Error(error);
    return Promise.reject(error);
  }
);

export default request;
