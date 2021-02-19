import React from 'react';
import styles from './FeedBackButtons.module.css';
import PropTypes from 'prop-types';

const FeedBackButtons = ({ Function, ButtonType }) => {
  const increment = event => {
    Function(ButtonType);
  };
  return (
    <>
      <button type="button" className={styles.optionButton} onClick={increment}>
        {ButtonType}
      </button>
    </>
  );
};
FeedBackButtons.propTypes = {
  Function: PropTypes.func.isRequired,
  ButtonType: PropTypes.string.isRequired,
};

export default FeedBackButtons;
