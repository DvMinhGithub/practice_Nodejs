export const STORE = {
  LOADING: '@app/loading',
  PRODUCT_NAME: '@product/name',
  PRODUCT_COLOR: '@product/color',
  PRODUCT_SIZE: '@product/size',
  PRODUCT_QUANTITY: '@product/quality',
  productUrl: 'http://localhost:8080/api/v1/product',
  LIMIT: 5,
  showNotification: (types, message) => {
    const type = types ? 'success' : 'error';
    Notification[type]({
      message
    });
  }
}

