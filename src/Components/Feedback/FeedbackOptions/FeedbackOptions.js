import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
        <h1>Please leave feedback</h1>
        {options.map(option => {
            return (
                <button
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}
                    key={option}
                    className={styles.options__button}
                >
                    {option}
                </button>
            );
        })}
    </>
);

export default FeedbackOptions;
