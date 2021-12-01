import React, {useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const Feed = (props) => {

	const [cards, setCards] = useState([]);

	useEffect(()=>{
		axios.get('/api/').then((res) =>{
			setCards(res);
		})
	}, []);

	const cardsArr = [];
	
	cards.forEach(card =>{
		cardsArr.push(<Card question={card.question} answer={card.answer} />);
	})
	

  return (<div className="feed">Feed Component
    {cardsArr}
  </div>);
}

export default Feed;