import React from 'react';
import Card from './Card';

const Feed = (props) => {
  return (<div className="feed">Feed Component
    <Card question="What is React?" answer="A node library" />
    <Card question="What is Express?" answer="A node backend library" />
    <Card question="What is React?" answer="A node library" />
  </div>);
}

export default Feed;