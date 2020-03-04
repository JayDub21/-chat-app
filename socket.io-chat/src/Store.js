import React from "react";
import io from "socket.io-client";

export const CTX = React.createContext();

const initState = {
  listing1: [
    { from: "justin", msg: "hello" },
    { from: "andy", msg: "whats up" },
    { from: "harrison", msg: "hello" },
    { from: "leo", msg: "whats up" }
  ],
  listing2: [
    { from: "justin", msg: "hello2" },
    { from: "andy", msg: "whats up2" },
    { from: "harrison", msg: "hello2" },
    { from: "leo", msg: "whats up2" }
  ]
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

export default function Store(props) {
  if (!socket) {
    socket = io(":3002");
  }
  const reducerHook = React.useReducer(reducer, initState);

  return <CTX.Provider value={reducerHook}> {props.children}</CTX.Provider>;
}
