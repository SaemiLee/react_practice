import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Board from "./board/container/Board";
import Login from './user/container/Login';

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  const publicRouter = () => (
    <>
      <Route exact path="/login" component={Login} />
      <Redirect from="*" to="/login" />
    </>
  )

  const privateRouter = () => (
    <>
      <Route exact path="/" component={Board} />
      <Redirect from="*" to="/" />
    </>
  )

  return <Switch>
      {isLoggedIn ? privateRouter() : publicRouter()}
    </Switch>
}

export default App;
