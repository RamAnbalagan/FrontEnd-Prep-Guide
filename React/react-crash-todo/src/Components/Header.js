import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <header style={headerStyle}>
      <h1> TodoList</h1>
      <Link to="/" style={LinkStyle}> Home </Link> | < Link to="/" style={LinkStyle}> About</Link>
    </header>
  )
}

const headerStyle = {
  backgroundColor : '#333',
  color: 'white',
  textAlign : 'center',
  padding : '10px'
}

const LinkStyle = {
  color : 'lightGrey'
}

export default Header;