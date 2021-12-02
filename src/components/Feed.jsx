import React, {useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const Feed = (props) => {

	const [cards, setCards] = useState([]);

	useEffect(()=>{
		axios.get('api/').then((res) =>{
			console.log(' RESPONSE FROM SERVER : ', res);
			setCards(res.data);
		})
	}, []);

	const cardsArr = [];
	
	cards.forEach(card =>{
		cardsArr.push(<Card question={card.question} answer={card.answer} />);
	})
	

  return (<div className="feed">
		<h1 id="cards-header">Cards</h1>
    {cardsArr}
  </div>);
}

export default Feed;