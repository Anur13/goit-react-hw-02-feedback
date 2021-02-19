import React, { Component } from 'react';
import FeedBackStatistics from './Components/FeedbackOptions/FeedBack-Statistics/FeedBackStatistics';
import FeedBackButtons from './Components/FeedbackOptions/FeedBack-Buttons/FeedBackButtons';
import NotificationMessage from './Components/FeedbackOptions/Notification-message/NotificationMessage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = ButtonType => {
    this.setState(prevState => {
      return { [ButtonType]: prevState[ButtonType] + 1 };
    });
  };

  render() {
    const stateKeyNames = Object.keys(this.state);

    const countTotalFeedback = Object.values(this.state).reduce(
      (acc, value) => (acc += value),
      0,
    );

    const positiveFeedback = Math.round(
      (this.state.good / countTotalFeedback) * 100,
    );
    return (
      <div className="container">
        <h1>Please leave feedback</h1>
        <div>
          {stateKeyNames.map(item => {
            return (
              <FeedBackButtons
                key={item}
                ButtonType={item}
                Function={this.increment}
              />
            );
          })}
          {/* <FeedBackButtons
            ButtonType={stateKeyNames[0]}
            Function={this.increment}
          />
          <FeedBackButtons
            ButtonType={stateKeyNames[1]}
            Function={this.increment}
          />
          <FeedBackButtons
            ButtonType={stateKeyNames[2]}
            Function={this.increment}
          /> */}
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

export default App;
