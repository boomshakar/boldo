import React from 'react'
import { ButtonType } from '../../models/propTypes'

const Button = ({type, label}:ButtonType ) => {
  return (
    <button className={`${type} button`}>{label }</button>
  )
}

export default Button