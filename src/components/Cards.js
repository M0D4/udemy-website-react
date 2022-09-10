import React from 'react'
import Card from './Card';
import './Cards.css'

function Cards(props) {
    const cards = props.cards;
    return (
        <>
            <div className='cards'>
                {cards.map((card) => <Card key={card.id} course={card.course}></Card>)}
            </div>
        </>
    );
}

export default Cards;