// import Product from '../pages/products/product';
import config from '../config';
// import LoginPage from '../pages/login/login';
import ProductPage from '../pages/products/product';

const publicRoutes = [{
  path: config.routes.home, element: <ProductPage />
},
// { path: config.routes.login, element: <LoginPage /> }
];

export { publicRoutes };
