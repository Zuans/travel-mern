import React from 'react'

import Button from 'elements/button'
import BrandText from './IconText'

export default function Header(props) {

  const getNavLinkClass = path => {
    console.log(window.location.pathname);
    return window.location.pathname === path ? " active": "";
  }
  return (
    <header className='spacing-5'>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandText/>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass('/')}`}>
                <Button className='nav-link' type='link' href='/'>
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/browse-by')}`}>
                <Button className='nav-link' type='link' href='/browse-by'>
                  Browse By
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/stories')}`}>
                <Button className='nav-link' type='link' href='/stories'>
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/agents')}`}>
                <Button className='nav-link' type='link' href='/agents'>
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}