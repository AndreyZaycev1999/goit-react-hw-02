import css from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedback }) => {
  return (
    <ul className={css.list_feedback}>
      {totalFeedback !== 0 && (
        <>
          <li>Good: {feedbacks.good}</li>
          <li>Neutral: {feedbacks.neutral}</li>
          <li>Bad: {feedbacks.bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>
            Positive:
            {Math.round(
              ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
            )}
            %
          </li>
        </>
      )}
    </ul>
  );
};
export default Feedback;
