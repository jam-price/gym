// import other pages
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from './components/Home';
import Drink from './components/Drink-details'
// import Router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// CSS
import "./App.css";

function App() {
  
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:drink" component={Drink} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
