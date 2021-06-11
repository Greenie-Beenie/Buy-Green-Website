import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import LocalMap from './Pages/LocalMap';
import RecipeCreator from './Pages/RecipeCreator';
import {BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <p><Link to="/home">Home</Link></p>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/recipecreator">Recipe Creator</Link></p>
        <p><Link to="/localmap">Local Farm Map</Link></p>

        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/recipecreator">
            <RecipeCreator/>
          </Route>
          <Route path="/localmap">
            <LocalMap/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
