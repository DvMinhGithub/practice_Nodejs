import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route path={route.path} key={index}
            element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
