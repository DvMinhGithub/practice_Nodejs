import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import LoginPage from './pages/login/login';
import { accessTokenState } from './recoil/store/account';
import { publicRoutes } from './routes';

function App() {
  const accessToken = useRecoilValue(accessTokenState)
  return (
    < Router >
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            path={route.path}
            key={index}
            element={accessToken !== '' ? route.element : <LoginPage />}
          />
        ))}
      </Routes>
    </Router >)
}

export default App;
