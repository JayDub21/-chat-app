import React from "react";

const CTX = React.createContext();

function reducer(state, action) {
    const {from, msg, listing}
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [action.payload.topic]: [
          ...state[action.payload.topic],
          {
            from: action.payload.from,
            msg: action.payload.msg
          }
        ]
      };
    default:
      return state;
  }
}

export default function Store() {
  const reducerHook = React.useReducer(reducer, initState);

  return <CTX.Provider value={}>{props.children}</CTX.Provider>;
}
