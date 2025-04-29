import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar';
import { AppContainer } from './App.styles';

const App = () => {
  return (
    <Router>
      <AppContainer>
        <NavBar />
        <AppRoutes />
      </AppContainer>
    </Router>
  );
}

export default App;