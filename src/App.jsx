// import
import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
// import

const App = () => {
  const [el, setEl] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(el);
    localStorage.setItem('el', stringifiedValue);
  }, [el]);

  // const onAddGood = () => {
  //   setEl({ ...el, good: el.good + 1 });
  // };
  // const onAddNeutral = () => {
  //   setEl({ ...el, neutral: el.neutral + 1 });
  // };
  // const onAddBad = () => {
  //   setEl({ ...el, bad: el.bad + 1 });
  // };

  const updateFeedback = feedbackType => {
    setEl({ ...el, [feedbackType]: el[feedbackType] + 1 });
  };

  const onReset = () => {
    setEl({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = el.good + el.neutral + el.bad;

  const positiveFeedback =
    totalFeedback !== 0 ? Math.round((el.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        onReset={onReset}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback positiveFeedback={positiveFeedback} el={el} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
