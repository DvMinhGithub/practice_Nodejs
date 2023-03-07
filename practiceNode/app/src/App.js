
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login';
import { publicRoutes } from './routes';
const token = localStorage.getItem('token')

function App() {
  console.log(token);
  console.log(token !== undefined ? 'true' : 'false');
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route path={route.path} key={index}
            element={token ? route.element : <LoginPage />} />
        ))}
      </Routes>
    </Router>
  );
}
export default App;
