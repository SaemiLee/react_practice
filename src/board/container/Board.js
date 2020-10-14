// import React, { useState, useEffect } from "react";
import React from "react";
// import { userData } from "../../db";
import SquareLayout from "./SquareLayout";
// import store from "../../common/store";
// import { setData } from "../state/action";

export default function Board() {
  // functional component
  // const [users, setUsers] = useState([]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Score Board</h1>
      {/* <SquareLayout users={users} /> */}
      <SquareLayout />
    </>
  );
}

// function useState(value) {
//   let data;
//   function setData(value) {
//     data = value;
//   }
//   return [data, setData];
// }

// export default class Board extends React.Component {
//   state = {
//     users: []
//   }

//   componentDidMount() {
//     this.setState({
//       users: userData
//     })
//   }

//   return <SquareLayout users={this.users} />;
// }
