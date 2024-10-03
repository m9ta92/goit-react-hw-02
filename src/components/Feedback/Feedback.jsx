const Feedback = ({ rating, positiveFeedback, totalFeedback }) => {
  return (
    <ul>
      <li>Good: {rating.good}</li>
      <li>Neutral: {rating.neutral}</li>
      <li>Bad: {rating.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}% </li>
    </ul>
  );
};

export default Feedback;
