import { HashRouter as Router, Link, Route } from "react-router-dom";
import { TestState } from "./state/testState";
import { TestContext } from "./context/testContext";
import { TestReducer } from "./reducer/testReducer";
import { TestEffect } from "./effect/testEffect";
import "./App.css";

function App() {
  return (
    <Router class="App">
      <ul>
        <li><Link to="/state/testState">test useState</Link></li>
        <li><Link to="/context/testContext">test useContext</Link></li>
        <li><Link to="/reducer/testReducer">test useReducer</Link></li>
        <li><Link to="/effect/testEffect">test useEffect</Link></li>
      </ul>
      <Route path="/state/testState" component={TestState}></Route>
      <Route path="/context/testContext" component={TestContext}></Route>
      <Route path="/reducer/testReducer" component={TestReducer}></Route>
      <Route path="/effect/testEffect" component={TestEffect}></Route>
    </Router>
  );
}

export default App;
