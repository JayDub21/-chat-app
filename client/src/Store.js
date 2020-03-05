import React from "react";
import io from "socket.io-client";

export const CTX = React.createContext();

const initState = {
  listing1: [{ from: "", msg: "" }],
  listing2: [{ from: "", msg: "" }]
};

function reducer(state, action) {
  const { from, msg, listing } = action.payload;
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [listing]: [...state[listing], { from, msg }]
      };
    default:
      return state;
  }
}

let socket;

function sendChatAction(value) {
  socket.emit("chat message", value);
}

export default function Store(props) {
  const [allChats, dispatch] = React.useReducer(reducer, initState);

  if (!socket) {
    socket = io(":3000");
    socket.on("chat message", function(msg) {
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
      console.log(msg);
    });
  }

  const user = "Justin" + Math.random(100).toFixed(2);

  return (
    <CTX.Provider value={{ allChats, sendChatAction, user }}>
      {" "}
      {props.children}
    </CTX.Provider>
  );
}
