import axiosInstance from "./axios-base";

class AppHttpClient {
  async get(url: string, params: any = {}) {
    const response = await axiosInstance.get(url, { params });
    return response;
  }

  async post(url: string, data: any) {
    const response = await axiosInstance.post(url, data);
    return response;
  }

  async put(url: string, data: any) {
    const response = await axiosInstance.put(url, data);
    return response;
  }

  async delete(url: string) {
    const response = await axiosInstance.delete(url);
    return response;
  }
}

export default new AppHttpClient();
