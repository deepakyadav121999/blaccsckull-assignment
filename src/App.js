import React from 'react';
import ReviewList from './ReviewList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Review Sentiment Analysis</h1>
      <ReviewList />
    </div>
  );
};

export default App;
