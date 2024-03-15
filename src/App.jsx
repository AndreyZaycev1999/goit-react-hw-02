import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const initialFeedbacks = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const stingifiedFeedbacks = localStorage.getItem("feedbackValues");
    const parsedFeedbacks = JSON.parse(stingifiedFeedbacks) ?? initialFeedbacks;
    return parsedFeedbacks;
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const handleResetFeedbacks = () => {
    setFeedbacks(initialFeedbacks);
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <>
      <button onClick={updateFeedback}>Good</button>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleResetFeedbacks={handleResetFeedbacks}
        totalFeedback={totalFeedback}
      />
      <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} />
    </>
  );
}

export default App;
