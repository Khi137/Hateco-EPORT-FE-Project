import axios from "axios";
import Cookies from "js-cookie";

const url = process.env.REACT_APP_API_HOST;

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = Cookies.get("accesstoken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // check token theo res message
    const responseData = error.response?.data || {};
    let errmess =
      responseData.response?.message ||
      responseData.message ||
      responseData.error ||
      error.message ||
      error + "";
    if (errmess === "Token verify false") {
      alert("Hết phiên đăng nhập, vui lòng đăng nhập lại !");
      Cookies.remove("accesstoken");
      window.location.assign(window.root_url + "/login");
    }
    // check token theo res status
    if (error.response && error.response.status === 401) {
      alert("Hết phiên đăng nhập, vui lòng đăng nhập lại !");
      Cookies.remove("accesstoken");
      window.location.assign(window.root_url + "/login");
    }

    if (error.response && error.response.status === 403) {
      window.location.assign(window.root_url + "/access_denied");
    }

    return Promise.reject(error);
  }
);

const post = async (url, data, showload) => {
  try {
    if (showload) {
    }

    const response = await api.post(url, data, {
      timeout: 600000,
    });

    const responseData = response.data;

    let errmess =
      responseData.response?.message ||
      responseData.message ||
      responseData.error ||
      responseData + "";
    if (errmess === "Token verify false") {
      alert("Hết phiên đăng nhập, vui lòng đăng nhập lại !");
      Cookies.remove("accesstoken");
      window.location.assign(window.root_url + "/login");
      return;
    }

    if (showload) {
    }

    return responseData;
  } catch (error) {
    let errmess =
      error.response?.message || error.message || error.error || error + "";
    if (errmess === "Token verify false") {
      alert("Hết phiên đăng nhập, vui lòng đăng nhập lại !");
      Cookies.remove("accesstoken");
      window.location.assign(window.root_url + "/login");
      return;
    }

    if (showload) {
    }

    return Promise.reject(error);
  }
};

export const apiService = {
  api,
  post,
};

// export default api;
