import React, { useState, useEffect, useRef } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'

function Quiz() {
  const [index, setIndex] = useState(0)
  const [question, setQuestion] = useState(data[index])
  const [lock, setLock] = useState(false)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)

  const option1 = useRef(null)
  const option2 = useRef(null)
  const option3 = useRef(null)
  const option4 = useRef(null)

  const option_array = [option1, option2, option3, option4]

  useEffect(() => {
    setQuestion(data[index])
  }, [index])

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add('correct')
        setLock(true)
        setScore((prev) => prev + 1)
      } else {
        e.target.classList.add('wrong')
        setLock(true)
        option_array[question.ans - 1].current.classList.add('correct')
      }
    }
  }

  const handleNext = () => {
    if (index < data.length - 1) {
      option_array.forEach((option) => {
        option.current.classList.remove('wrong')
        option.current.classList.remove('correct')
      })
      setLock(false)
      setIndex(index + 1)
    } else {
      setResult(true)
    }
  }

  const resetQuiz = () => {
    setIndex(0)
    setScore(0)
    setLock(false)
    setResult(false)
    option_array.forEach((option) => {
      option.current.classList.remove('wrong')
      option.current.classList.remove('correct')
    })
  }

  if (result) {
    return (
      <div className='container'>
        <h1>Quiz Completed 🎉</h1>
        <h2>Your Score: {score} / {data.length}</h2>
        <button onClick={resetQuiz}>Restart Quiz</button>
      </div>
    )
  }

  return (
    <div className='container'>
      <h1>React-Quiz-App</h1>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li ref={option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
        <li ref={option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
        <li ref={option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
        <li ref={option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
      </ul>
      <button onClick={handleNext} disabled={!lock}>Next</button>
      <div className="index">
        Question {index + 1} of {data.length}
      </div>
      <div className="score">Score: {score}</div>
    </div>
  )
}

export default Quiz
