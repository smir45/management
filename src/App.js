import Home from './jsx/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route to="/" exact component={Home}/>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
