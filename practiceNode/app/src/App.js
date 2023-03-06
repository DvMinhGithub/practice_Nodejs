import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
function App() {
  return (
    <Container className="p-3">
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            return (
              <Route path={route.path} key={index} element={route.element} />
            );
          })}
        </Routes>
      </Router>
    </Container>
  );
}
export default App;
