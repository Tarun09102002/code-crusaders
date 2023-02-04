import React from 'react'
// import FlashcardList from './FlashcardList'
import Flashcard from './Flashcard';
import './FlashcardList.css';

export default function FlashcardList({ flashcards,incrementScore }) {
  return (
    <div className="card-grid">
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} incrementScore={incrementScore}/>
      })}
    </div>
  )
}