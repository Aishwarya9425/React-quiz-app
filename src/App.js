import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],
  //loading / error/ ready/active/finished
  status: "loading",
};

//reducer function is the one which updates the state accordingly
//takes the current state and the action as specified in the payload
//returns new state for each switch
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Invalid action");
  }
}

export default function App() {
  //fake server - json server running on http://localhost:9000/questions
  //get details from thatres.json

  //we will use useReducer to handle all states and updates

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}
