import React from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../../state";

export default function Login() {
  const dispatch = useDispatch();
 
  return (
      <div className="login-container">
          <h1>Welcome to Board</h1>
          <button onClick={() => { dispatch(loginAction()) }}>Login</button>
      </div>
  );
}
