import React from 'react'
import Logo from '../images/blog_logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <span>
        Made with ♥ and <b>React.js</b>{' '}
      </span>
    </footer>
  )
}

export default Footer
