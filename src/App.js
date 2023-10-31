import LoginForm from './components/LoginForm';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" component={HomePage}>
            <Route path="/login" component={LoginForm} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
