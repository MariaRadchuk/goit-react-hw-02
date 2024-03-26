import React, { useState, useEffect } from 'react';
import Options from './Options.jsx';
import Feedback from './Feedback.jsx';
import Notification from './Notification.jsx';

const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    useEffect(() => {
        const storedFeedback = JSON.parse(localStorage.getItem('feedback'));
        if (storedFeedback) {
            setFeedback(storedFeedback);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = feedbackType => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedbackPercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0
        });
    };

    return (
        <div>
            <h1>Sip Happens Café</h1>
            <Options
                updateFeedback={updateFeedback}
                totalFeedback={totalFeedback}
                resetFeedback={resetFeedback}
            />
            {totalFeedback > 0 &&
                <Feedback
                    feedback={feedback}
                    totalFeedback={totalFeedback}
                    positiveFeedbackPercentage={positiveFeedbackPercentage}
                />
            }
            {totalFeedback === 0 && <Notification />}
        </div>
    );
};

export default App;
