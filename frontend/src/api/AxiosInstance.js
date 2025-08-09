import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true,
});

const refreshAccessToken = async () => {
  try {
    await axios.post(
      "http://localhost:8000/api/users/refresh/",
      {},
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    throw new Error("Token refresh failed");
  }
};

AxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await refreshAccessToken();
        return AxiosInstance(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
export default AxiosInstance;
