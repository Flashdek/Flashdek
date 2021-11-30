import React from 'react';

const AddQuestion = () => {
  return (
    <div>
      Add Question component
      <div className="categories">
        Categories/Keywords
        <input></input>
      </div>
      <div className="question">
        Question
        <textarea></textarea>
      </div>
      <div className="answer">
        Answer
        <textarea></textarea>
      </div>
      <button id="submit">Submit</button>
    </div>
  );
}

export default AddQuestion;