import React, { Component } from 'react';

// Components
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';
import Notification from './Components/Notification/Notification';
import Section from './Components/Section/Section';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleIncrement = event => {
        const { name } = event.currentTarget;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
    };

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;

        return total;
    }
    countPositiveFeedbackPercentage() {
        const { good } = this.state;
        const percentage = (good / this.countTotalFeedback()) * 100;
        const positiveFeedbackPercentage = parseInt(percentage) + '%';
        return positiveFeedbackPercentage;
    }

    render() {
        const options = Object.keys(this.state);
        const { good, neutral, bad } = this.state;

        return (
            <div>
                <Section>
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.handleIncrement}
                    />
                </Section>

                <Section title="Statistics">
                    {good || neutral || bad ? (
                        <Statistics
                            title="Please leave feedback"
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            percentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="No feedback given" />
                    )}
                </Section>
            </div>
        );
    }
}

export default App;
