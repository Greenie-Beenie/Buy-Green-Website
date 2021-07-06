import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import LocalMap from './Pages/LocalMap';
import RecipeCreator from './Pages/RecipeCreator';
import NavBar from './Components/NavBar'
import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="pages">
        <Switch>
          <Route path="/Home" component = {Home} />
          <Route path ="/About" component = {About} />
          <Route path ="/RecipeCreator" component = {RecipeCreator} />
          <Route path ="/LocalMap" component = {LocalMap} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
