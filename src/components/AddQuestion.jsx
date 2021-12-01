import React from 'react';

const AddQuestion = () => {
  return (
    <div id="questionInput">
      <div className="row">
        <div className="column">
          <div className="categories">Categories/Keywords</div>
        </div>
        <div className="column">
          <input></input>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="question">Question</div>
        </div>
        <div className="column">
          <textarea rows='4' cols='30'></textarea>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="answer">Answer</div>
        </div>
        <div className="column">
          <textarea rows='4' cols='30'></textarea>
        </div>
      </div>
      <button id="submit">Submit</button>
    </div>
  );
}

export default AddQuestion;