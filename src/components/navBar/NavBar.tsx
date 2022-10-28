import { Inverted } from '../../models/propTypes';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { routes } from '../../util/routes';

const NavBar = (props: Inverted) => {
  return (
    <nav className="nav-contain">
      <div className="logo_contain">
        <Link to="/">
          <img src={`/assets/${!props.inverted ? 'logo-default' : 'logo-inverted'}.svg`} alt="logo" />
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
        <li className="nav-link_link btn_default">
          <Link to={routes.blog}>
            <Button type="pry_white" label="Login" />{' '}
          </Link>
        </li>
        <li className="nav-link_link btn_aboutv2">
          <Link to={routes.blog}>
            <Button type="transparent" label="Login" />{' '}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
