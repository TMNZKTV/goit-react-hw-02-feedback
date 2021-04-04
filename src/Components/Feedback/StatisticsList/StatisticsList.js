import React from 'react';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import styles from './StatisticsList.module.css';

const StatisticsList = ({ good, neutral, bad, total, percentage }) => (
    <ul className={styles.statistics__list}>
        <span className={styles.statistics__title}>Statistics</span>
        {good || neutral || bad ? (
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                percentage={percentage}
            />
        ) : (
            <Notification message="No feedback given" />
        )}
    </ul>
);

export default StatisticsList;
