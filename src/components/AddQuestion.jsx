import React from 'react';

const AddQuestion = () => {
  return (
    <div id="questionInput">
      Add Question component
      <div className="categories">
        Categories/Keywords
        <input></input>
      </div>
      <div className="question">
        Question
        <textarea rows='4' cols='30'></textarea>
      </div>
      <div className="answer">
        Answer
        <textarea rows='4' cols='30'></textarea>
      </div>
      <button id="submit">Submit</button>
    </div>
  );
}

export default AddQuestion;