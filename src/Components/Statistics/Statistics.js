import React from 'react';
// import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
    <ul className={styles.statistics__list}>
        <span className={styles.statistics__title}></span>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {percentage}</li>
    </ul>
);

export default Statistics;
