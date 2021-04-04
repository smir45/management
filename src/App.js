import Home from './jsx/Home';
import Login from './jsx/login';
import Register from './jsx/register';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />

      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
