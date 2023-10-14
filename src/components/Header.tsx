import React from 'react'
import '../styles/header.scss'

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-logo-container">
        <div className="header-logo-name">
          <p className='header-logo-lastname'>thiering</p>
          <p className='header-logo-firstname'>noah</p>
        </div>
      </div>
    </header>
  )
}
