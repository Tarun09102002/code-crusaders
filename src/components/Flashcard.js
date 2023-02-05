import React, { useState, useEffect, useRef } from 'react'
import './Flashcard.css';

export default function Flashcard({ flashcard,score,incrementScore,onDecrement }) {
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')
  const [correct, setCorrect] = useState(false);
  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontHeight, backHeight, 100))
  }

  useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])

  function clickHandler(e) {
    if (e.target.innerText === flashcard.answer) {
      setCorrect(true);
      incrementScore();
    } else {
      setCorrect(false);
    }
  }
  return (
    <div
      className={`card ${flip ? 'flip' : ''} `}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map(option => {
            return <div className="flashcard-option" key={option} onClick={clickHandler}>{option}</div>
          })}
        </div>
      </div>
      <div className={`back ${correct ? "correct" : "incorrect"}`} ref={backEl}>{flashcard.answer}</div>
    </div>
  )
}
