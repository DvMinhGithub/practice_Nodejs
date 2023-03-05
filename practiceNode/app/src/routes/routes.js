// import Product from '../components/products/product';
import Product from '../components/products/product';
import config from '../config';
const publicRoutes = [{
  path: config.routes.home,
  element: <Product />
}];
export {publicRoutes};