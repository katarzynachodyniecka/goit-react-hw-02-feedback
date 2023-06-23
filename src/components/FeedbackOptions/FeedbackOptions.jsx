import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonContainer}>
      {options.map((buttonName, index) => (
        <button className={css.button} key={index} onClick={onLeaveFeedback}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};
