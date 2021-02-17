import styles from './Button.module.css';
import React, { Component } from 'react';
import FeedBackStatistics from './FeedBack-Statistics/FeedBackStatistics';
import NotificationMessage from './Notification-message/NotificationMessage';

class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = event => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  incrementNeutral = event => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  incrementBad = event => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    const countTotalFeedback = Object.values(this.state).reduce(
      (acc, value) => (acc += value),
      0,
    );

    const positiveFeedback = Math.round(
      (this.state.good / countTotalFeedback) * 100,
    );

    return (
      <div className={styles.container}>
        <h1>Please leave feedback</h1>
        <div>
          <button
            type="button"
            className={styles.optionButton}
            onClick={this.incrementGood}
          >
            Good
          </button>
          <button
            type="button"
            className={styles.optionButton}
            onClick={this.incrementNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className={styles.optionButton}
            onClick={this.incrementBad}
          >
            Bad
          </button>
        </div>

        {countTotalFeedback > 0 ? (
          <FeedBackStatistics
            totalFeedback={countTotalFeedback}
            positiveFeedback={positiveFeedback}
            {...this.state}
          />
        ) : (
          <NotificationMessage />
        )}
      </div>
    );
  }
}

export default FeedbackOptions;
