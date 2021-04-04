import React from 'react';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {percentage}</li>
        </>
    );
};

export default Statistics;
