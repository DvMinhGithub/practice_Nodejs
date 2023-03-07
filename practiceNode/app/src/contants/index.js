import { notification } from "antd";

export const contants = {
  userUrl: 'http://localhost:8080/api/v1/auth',
  productUrl: 'http://localhost:8080/api/v1/product',
  LIMIT: 5,
  showNotification: (res) => {
    const type = res.success ? 'success' : 'error';
    notification[type]({
      message: res.message,
    });
  }
};
