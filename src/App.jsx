import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Pronostico from "./pages/pronostico/Pronostico";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/pronostico-por-region" component={Pronostico}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
