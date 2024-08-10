import React from 'react';
import Tooltip from './Tooltip';
import './ReviewHighlighter.css';

const ReviewHighlighter = ({ review }) => {
  const getHighlightedText = (text, analytics) => {
    let segments = [];
    let lastIndex = 0;

    analytics.forEach(({ highlight_indices, sentiment, topic }) => {
      highlight_indices.forEach(([start, end]) => {
        if (lastIndex < start) {
          segments.push({
            text: text.slice(lastIndex, start),
            sentiment: null
          });
        }
        segments.push({
          text: text.slice(start, end),
          sentiment,
          topic
        });
        lastIndex = end;
      });
    });

    if (lastIndex < text.length) {
      segments.push({
        text: text.slice(lastIndex),
        sentiment: null
      });
    }

    return segments.map((segment, index) => (
      <span
        key={index}
        className={`highlight-${segment.sentiment?.toLowerCase()}`}
      >
        {segment.text}
        {segment.sentiment && (
          <Tooltip topic={segment.topic} />
        )}
      </span>
    ));
  };

  return (
    <div className="review">
      <div className="review-header">
        <img src={review.source.icon} alt={review.source.name} className="source-icon" />
        <div>
          <h3>{review.reviewer_name}</h3>
          <p className="review-date">{review.date}</p>
        </div>
      </div>
      <div className="review-content">
        {getHighlightedText(review.content, review.analytics)}
      </div>
    </div>
  );
};

export default ReviewHighlighter;
