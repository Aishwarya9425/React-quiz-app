function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "👏 Awesome champ! You are a PRO 🫡";
  if (percentage > 80 && percentage < 100)
    emoji = "You were almost there!🤪 Good work!!";
  if (percentage > 50 && percentage < 80)
    emoji = "Well, learn from your  mistakes and try again!😌";
  if (percentage > 20 && percentage < 50)
    emoji = "Buddy sorry for the bad news.. you gotta learn react again🙄";
  if (percentage === 0) emoji = "You really dont know react, do you ?🤔 ";

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}(
        {Math.ceil(percentage)}%)
        <br />
        <strong>
          {" "}
          <em>{emoji}</em>
        </strong>
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>
    </>
  );
}

export default FinishScreen;
