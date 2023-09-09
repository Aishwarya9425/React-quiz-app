import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const min = Math.floor(secondsRemaining / 100);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      //cleanup timer cuz it keeps running
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      <strong>
        {min < 10 && "0"}
        {min} 
        : 
        {seconds < 10 && "0"}
        {seconds}
      </strong>
    </div>
  );
}

export default Timer;
