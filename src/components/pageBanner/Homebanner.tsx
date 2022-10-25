import NavBar from '../navBar/NavBar'
import { Inverted } from '../../models/propTypes'
import React from 'react'
import '../../styles/homepage.scss'


const Homebanner = (props: Inverted) => {
  return (
    <header className={`home_container container${props.inverted ? ' inverted' : ''}`}>
      <NavBar inverted={props.inverted} />
    </header>
  )
}

export default Homebanner