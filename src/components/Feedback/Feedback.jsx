import { useEffect } from "react";
import css from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedback }) => {
  return (
    <ul>
      <li>Good: {feedbacks.good}</li>
      <li>Neutral: {feedbacks.neutral}</li>
      <li>Bad: {feedbacks.bad}</li>

      {totalFeedback !== 0 && (
        <>
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
