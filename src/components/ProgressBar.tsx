import React from 'react';
import './ProgressBar.scss';

interface ProgressBarProps {
  trait: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ trait, percentage }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-label">
        <span>{trait}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
