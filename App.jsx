import React, { useState } from 'react';
import "./App.css";
import SingleQuestion from "/SingleQuestion";
import data from './data' 


const App = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}


export default App