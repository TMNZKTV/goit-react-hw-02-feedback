import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import StatisticsList from '../StatisticsList/StatisticsList';

const Section = ({
    options,
    onLeaveFeedback,
    good,
    neutral,
    bad,
    total,
    percentage,
}) => {
    return (
        <div>
            <FeedbackOptions
                options={options}
                onLeaveFeedback={onLeaveFeedback}
            />
            <StatisticsList
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                percentage={percentage}
            />
        </div>
    );
};

export default Section;
