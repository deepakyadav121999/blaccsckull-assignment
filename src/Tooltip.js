import React from 'react';
import './Tooltip.css';

const Tooltip = ({ topic }) => {
  return (
    <div className="tooltip">
      {topic}
    </div>
  );
};

export default Tooltip;
