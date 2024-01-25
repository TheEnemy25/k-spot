import Axios from "../Axios";

const APIService = {
  async get<T>(url: string, params?: any): Promise<T> {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  },

  async post<T>(url: string, data?: any, params?: any): Promise<T> {
    const response = await Axios.post<T>(url, data, { params });
    return response.data;
  },

  async put<T>(url: string, data?: any, params?: any): Promise<T> {
    const response = await Axios.put<T>(url, data, { params });
    return response.data;
  },

  async delete(url: string, params?: any): Promise<void> {
    await Axios.delete(url, { params });
  },
};

export default APIService;
