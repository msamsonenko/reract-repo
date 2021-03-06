import shortid from 'shortid';
import './FeedbackOptions.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const names = Object.keys(options);
  return names.map(name => {
    const itemKey = shortid.generate();
    return (
      <button
        className="FeedbackOptions__btn"
        type="button"
        onClick={onLeaveFeedback}
        name={name}
        key={itemKey}
      >
        {name.toUpperCase()}
      </button>
    );
  });
};

export default FeedbackOptions;
