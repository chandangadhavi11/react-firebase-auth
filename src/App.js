import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomePage from './ui/HomePage';
import SignInPage from './ui/SignInPage';
import RegisterPage from './ui/RegisterPage';
import WelcomePage from './ui/WelcomePage';
import ProtectedRoute from "./auth/ProtectedRoute"
import { useAuth } from './auth/useAuth'

function App() {
  const { isLoading, user } = useAuth()
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/home" component={HomePage} exact/>
          <Route path="/signin" component={SignInPage} exact/>
          <Route path="/register" component={RegisterPage} exact/>
          <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path="/welcome" component={WelcomePage} exact/>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
