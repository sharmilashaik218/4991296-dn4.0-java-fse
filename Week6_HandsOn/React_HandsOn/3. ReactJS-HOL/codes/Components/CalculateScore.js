import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = ({ name, school, total, goal }) => {
  // Calculate average score
  const calculateAverage = () => {
    if (total && goal) {
      return ((total / goal) * 100).toFixed(2);
    }
    return 0;
  };

  const averageScore = calculateAverage();

  return (
    <div className="score-container">
      <h2>Student Score Calculator</h2>
      
      <div className="student-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>School:</strong> {school}</p>
        <p><strong>Total Marks:</strong> {total}</p>
        <p><strong>Goal Marks:</strong> {goal}</p>
      </div>
      
      <div className="score-result">
        <h3>Average Score: {averageScore}%</h3>
      </div>
    </div>
  );
};

export default CalculateScore;