import React from "react";
import Loader from '../../component/Loader';

export default function Login() {
  const isLogin = false;
  return (
      <div className="login-container">
          {!isLogin && <Loader />}
          {isLogin && <><h1>Welcome to Board</h1>
            <button onClick={() => {}}></button></>
          }
      </div>
  );
}
