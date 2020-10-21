import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Board from "./board/container/Board";
import Loader from "./user/component/Loader";
import Login from './user/container/Login';

function App() {
  const { login, isLoading } = useSelector(state => state.user);
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
    {
      login === null && <Loader />
    }
    {
      login === true ? privateRouter() : publicRouter()
    }
    </Switch>
}

export default App;
