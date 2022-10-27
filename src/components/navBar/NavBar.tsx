import { Inverted } from '../../models/propTypes';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { routes } from '../../util/routes';

const NavBar = ({ inverted }: Inverted) => {
  return (
    <nav className="nav-contain">
      <div className="logo_contain">
        <Link to="/">
          <img src={`/assets/${!inverted ? 'logo-default' : 'logo-inverted'}.svg`} alt="logo" />
        </Link>
      </div>

      <ul className="nav-link_contain">
        <li className="nav-link_link">
          <Link to={routes.homev2}>Product</Link>
        </li>
        <li className="nav-link_link">
          <Link to={routes.aboutv2}>Services</Link>
        </li>

        <li className="nav-link_link">
          <Link to={routes.about}>About</Link>
        </li>
        <li className="nav-link_link">
          <Link to={routes.blog}>
            <Button type="pry_white" label="Login" />{' '}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
