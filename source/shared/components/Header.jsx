import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.css'

console.log(styles)

function Header() {
  return (
    <header className="header">
      <h1 className={styles.title}>
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

        >
          Platzi
        </a>
      </nav>
    </header>
  )
}

export default Header
