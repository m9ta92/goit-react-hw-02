const Feedback = ({ el, positiveFeedback }) => {
  return (
    <ul>
      <li>Good: {el.good}</li>
      <li>Neutral: {el.neutral}</li>
      <li>Bad: {el.bad}</li>
      <li>Positive: {positiveFeedback}% </li>
    </ul>
  );
};

export default Feedback;
