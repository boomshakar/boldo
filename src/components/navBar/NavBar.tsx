import { Inverted } from '../../models/propTypes'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

const NavBar = ({inverted}: Inverted) => {
  return (
    <nav className='nav-contain'>
      <div className="logo_contain">
        <Link to='/'>
        <img src={`/assets/${!inverted ? "logo-default" : "logo-inverted"}.svg`} alt="logo" />
        </Link>
      </div>

      <ul className="nav-link_contain">
        <li className='nav-link_link'>
          <Link to={'/'}>Product</Link>
        </li>
        <li className='nav-link_link'>
          <Link to={'/'}>Services</Link>
        </li>
        
        <li className='nav-link_link'>
          <Link to={'/'}>About</Link>
        </li>
        <li className='nav-link_link'>
          <Link to={'/'}><Button type='pry_white' label='Login' /> </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar