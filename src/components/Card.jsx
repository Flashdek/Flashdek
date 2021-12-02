import React, {useState} from 'react';

const Card = (props) =>{
  const [flip, setFlip] = useState("");
  const flipCard = (e)=>{
    if(flip=="") setFlip("rotateY(180deg)");
    else setFlip("");
  }

  return (<div className="card"  >
    <div className="flip-card-inner" style={{transform: flip}} onClick={()=>flipCard()}>
      <div className="flip-card-front" >
        <h1>QUESTION</h1>
        <p>{props.question}</p>
      </div>
      <div className="flip-card-back">
        <h1>ANSWER</h1>
        <p>{props.answer}</p>
      </div>
    </div>
    <div className="card-footer" >
      <div><button>Edit</button></div><div><button>Like</button> <button>Dislike</button></div>
    </div>
  </div>);
}

export default Card;