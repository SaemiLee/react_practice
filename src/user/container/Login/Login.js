import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../component/Loader';
import { login as loginAction } from "../../state";

export default function Login() {
  const dispatch = useDispatch();
  const { isLoading, login } = useSelector(state => state.user)
  useEffect(() => {
    dispatch(loginAction());
  })
  return (
      <div className="login-container">
          {isLoading && <Loader />}
          {login && <><h1>Welcome to Board</h1>
            <button onClick={() => {}}></button></>
          }
      </div>
  );
}
