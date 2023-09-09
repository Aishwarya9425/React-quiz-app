export default function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>Answer {numQuestions} react questions</h3>
      <button className="btn btn-ui">Begin the quiz!!</button>
    </div>
  );
}
