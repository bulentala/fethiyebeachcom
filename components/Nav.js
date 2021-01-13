import React from 'react'
import AllHead from './AllHead'
import Name from './Name'
import MenuIcon from './MenuIcon'

const Nav = () => {
  return (
    <>
      <AllHead />
      <amp-mega-menu height='4rem' layout='fixed-height'>
        <nav>
          <ul className='flex items-center justify-between container mx-auto px-6 pt-5'>
            <li>
              <div role='button'>
                <Name />
              </div>
            </li>
            <li>
              <div role='button'>
                <MenuIcon />
              </div>
              <div role='dialog'>Component</div>
            </li>
          </ul>
        </nav>
      </amp-mega-menu>
    </>
  )
}
export const config = { amp: true }
export default Nav
