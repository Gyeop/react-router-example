import Link from "../Link";
import Router, { Route, Switch } from "../../utils/Router";

function App() {
  return (
    <Router>
      <>
        <div>
          <ul>
            <li>
              <Link to="/123">Move to 123</Link>
            </li>
            <li>
              <Link to="/qwer">Move to qwer</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/123">
            <div>여기는 /123 입니다!</div>
          </Route>
          <Route path="/qwer">
            <div>여기는 /qwer 이에요!</div>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
