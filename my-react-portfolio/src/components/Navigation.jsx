import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="no-bullets">
        <li>
          <NavLink
            to="/aboutme"
            activeClassName="active"
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            activeClassName="active"
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="active"
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            activeClassName="active"
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

