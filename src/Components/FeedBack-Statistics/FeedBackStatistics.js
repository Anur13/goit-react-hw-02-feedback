import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedBackStatistics.module.css';

const FeedBackStatistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={styles.statisticsContainer}>
      <h2>Statistics</h2>
      <ul className={styles.statisticsList}>
        <li className={styles.statisticsListItem}>Good: {good}</li>
        <li className={styles.statisticsListItem}>Neutral: {neutral}</li>
        <li className={styles.statisticsListItem}>Bad: {bad}</li>
        <li className={styles.statisticsListItem}>
          Total Feedback: {totalFeedback}
        </li>
        <li className={styles.statisticsListItem}>
          Positive Feedback: {positiveFeedback}%
        </li>
      </ul>
    </div>
  );
};

FeedBackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default FeedBackStatistics;
