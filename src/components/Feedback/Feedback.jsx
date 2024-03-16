import css from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedback, positiveFeedbacks }) => {
  return (
    <ul className={css.list_feedback}>
      {totalFeedback !== 0 && (
        <>
          <li>Good: {feedbacks.good}</li>
          <li>Neutral: {feedbacks.neutral}</li>
          <li>Bad: {feedbacks.bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedbacks}%</li>
        </>
      )}
    </ul>
  );
};
export default Feedback;
