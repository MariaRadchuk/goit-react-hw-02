import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
    return (
        <div className={styles.feedback}>
            <h2>Feedback Statistics</h2>
            <p>Total feedback: {totalFeedback}</p>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Positive feedback percentage: {positiveFeedbackPercentage}%</p>
        </div>
    );
};

export default Feedback;
