import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { HomePage } from "./pages/main/HomePage";

const useRoute = (token) => {
  if (!token) {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Redirect to="/login" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );
};

function App() {
  const token = useSelector((state) => state.token);
  const routing = useRoute(token);
  return routing;
}

export default App;
