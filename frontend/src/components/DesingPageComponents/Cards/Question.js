import React from 'react'
import { Link } from 'react-router-dom'
import Icono from '../../../assets/images/question.png'
import './Question.css'

const Question = () => {
  return (
    <Link to='/'>
      <img src={Icono} className='icono-question'/>
    </Link>
  )
}

export default Question
