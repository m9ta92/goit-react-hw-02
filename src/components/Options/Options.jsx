import css from './Options.module.css';

const Options = ({ updateFeedback, onReset, totalFeedback }) => {
  let classname = css.reset_btn_hidden;
  if (totalFeedback > 0) {
    classname = css.reset_btn_show;
  }
  return (
    <div className={css.btns}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      <button className={classname} onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Options;
