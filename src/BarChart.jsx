import React from 'react';

const BarChart = ({ preTestPercent, postTestPercent }) => {

  return (
    <div className="new-chart-container">

      <div className="chart-y-axis">
        <span>100%</span>
        <span>75%</span>
        <span>50%</span>
        <span>25%</span>
        <span>0%</span>
      </div>

      <div className="chart-plot-area">
        <div className="chart-bar-wrapper">
          <div className="chart-bar-area">
            <div 
              className="chart-bar-fill pre-test-bar" 
              style={{ height: `${preTestPercent}%` }}
              title={`Pre-Test: ${preTestPercent}%`} 
            >
              <span className="chart-bar-score">{preTestPercent}%</span>
            </div>
          </div>
          <div className="chart-label">Pre-Test</div>
        </div>

        <div className="chart-bar-wrapper">
          <div className="chart-bar-area">
            <div 
              className="chart-bar-fill post-test-bar" 
              style={{ height: `${postTestPercent}%` }}
              title={`Post-Test: ${postTestPercent}%`} 
            >
              <span className="chart-bar-score">{postTestPercent}%</span>
            </div>
          </div>
          <div className="chart-label">Post-Test</div>
        </div>
        
      </div>
    </div>
  );
};

export default BarChart;