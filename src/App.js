import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Board from "./board/container/Board";
import Login from './user/container/Login';

function App() {
  const { login } = useSelector(state => state.user);
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
      {login ? privateRouter() : publicRouter()}
    </Switch>
}

export default App;
