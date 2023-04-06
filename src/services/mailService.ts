import axios, { AxiosError, AxiosResponse } from "axios";

const instance = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

class MailService {
  static async sendInvite(email: string) {
    try {
      const res = await instance.post("/", { recipient: email });
      return this.formatResponse(res);
    } catch (error) {
      return this.formatError(error as AxiosError);
    }
  }

  private static formatResponse(res: AxiosResponse) {
    return {
      data: res.data,
      hasError: false,
      error: null,
    };
  }

  private static formatError(error: AxiosError) {
    return {
      data: null,
      hasError: true,
      error: error.response?.data,
    };
  }
}

export default MailService;
