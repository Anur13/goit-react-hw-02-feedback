import React from 'react';
import FeedBackButtons from './FeedBack-Buttons/FeedBackButtons';

const FeedbackOptions = ({ state, increment }) => {
  const stateKeyNames = Object.keys(state);

  return (
    <div>
      {stateKeyNames.map(item => {
        return (
          <FeedBackButtons key={item} ButtonType={item} Function={increment} />
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
