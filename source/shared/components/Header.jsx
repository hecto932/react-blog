import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className="title">
        Mi primera app con React
      </h1>

      <nav role="navigation" className="navigation">
        <Link to="/" className="link">
          Home
        </Link>
        <a
          className="link"
          href="https://platzi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Platzi
        </a>
      </nav>
    </header>
  );
}

export default Header;
