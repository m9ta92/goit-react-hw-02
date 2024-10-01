import css from './Options.module.css';

const Options = ({
  onAddGood,
  onAddNeutral,
  onAddBad,
  onReset,
  totalFeedback,
}) => {
  let classname = css.reset_btn_hidden;
  if (totalFeedback > 0) {
    classname = css.reset_btn_show;
  }
  return (
    <div className={css.btns}>
      <button onClick={onAddGood}>Good</button>
      <button onClick={onAddNeutral}>Neutral</button>
      <button onClick={onAddBad}>Bad</button>
      <button className={classname} onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Options;
