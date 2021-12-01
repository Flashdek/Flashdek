import React, { useState, useEffect } from 'react';

const AddQuestion = () => {

  const [ question, setQuestion ] = useState('');
  const [ answer, setAnswer ] = useState('');

  const technologyTypes = [
    'react',
    'redux',
    'node',
    'express',
    'SQL',
    'mongo',
    'webpack'
  ]
  const [checkedState, setCheckedState] = useState(
    new Array(technologyTypes.length).fill(false)
  );

  const techCheckboxes = [];

  const handleChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  for (let i = 0; i < technologyTypes.length; i++) {
    const tech = technologyTypes[i];
    techCheckboxes.push(
      <div>
        <input type='checkbox' name={tech} index={i} value={tech} onChange={() => handleChange(i)}/>
        <label for={tech}>{

          tech
        }</label>
      </div>
    )
  }

  const submitHandler = () => {
    const arrayToSend = [];
    for (let i = 0; i < technologyTypes.length; i++) {
      if (checkedState[i]) {
        arrayToSend.push(technologyTypes[i]);
      }
    }

    console.log('question', question);
    console.log('answer', answer);
    console.log('arrayToSend', arrayToSend);

    fetch('http://localhost:3000/api/submitCard', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        keyword: arrayToSend,
        question: question,
        answer: answer
      })
    })
      .then(() => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
          );
        setCheckedState(updatedCheckedState);
        setQuestion('');
        setAnswer('');
        alert('Your question has been submitted!');
      })
  }

  return (
    <div id="questionInput">
      <div className="row">
        <div className="column">
          <div className="categories">Categories/Keywords</div>
        </div>
        <div className="column">
          <div id='checkboxes'>
            {techCheckboxes}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="question">Question</div>
        </div>
        <div className="column">
          <textarea rows='4' cols='30' value={question} onChange={e => setQuestion(e.target.value)}></textarea>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="answer">Answer</div>
        </div>
        <div className="column">
          <textarea rows='4' cols='30' value={answer} onChange={e => setAnswer(e.target.value)}></textarea>
        </div>
      </div>
      <button id="submit" onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default AddQuestion;