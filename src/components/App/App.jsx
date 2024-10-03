// imports
import { useEffect, useState } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const App = () => {
  // State initialization
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Initialization of data from local storage when loading a component
  useEffect(() => {
    const savedRating = localStorage.getItem('ratingValue');
    if (savedRating) {
      setRating(JSON.parse(savedRating));
    }
    console.log(savedRating);
  }, []);

  // Saving statistics to local storage every time the data changes
  useEffect(() => {
    localStorage.setItem('ratingValue', JSON.stringify(rating));
  }, [rating]);

  // state handler for each button
  // const onAddGood = () => {
  //   setRating({ ...rating, good: rating.good + 1 });
  // };
  // const onAddNeutral = () => {
  //   setRating({ ...rating, neutral: rating.neutral + 1 });
  // };
  // const onAddBad = () => {
  //   setRating({ ...rating, bad: rating.bad + 1 });
  // };

  // state handler for all buttons
  const updateFeedback = feedbackType => {
    setRating({ ...rating, [feedbackType]: rating[feedbackType] + 1 });
  };

  // resetting collected feedback
  const onReset = () => {
    setRating({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // total number of reviews
  const totalFeedback = rating.good + rating.neutral + rating.bad;

  // Calculation of the percentage of positive reviews
  const positiveFeedback =
    totalFeedback !== 0 ? Math.round((rating.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        onReset={onReset}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          positiveFeedback={positiveFeedback}
          rating={rating}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
