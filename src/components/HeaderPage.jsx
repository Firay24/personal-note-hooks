import React from 'react'
import { Link } from 'react-router-dom'
import { TiClipboard } from "react-icons/ti";
import { TbPencilPlus } from "react-icons/tb";
import { RiInboxArchiveLine } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";
import { FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';
import ToggleThemeButton from './ToggleThemeButton';

function HeaderPage({ logout, name }) {
  return (
    <nav className='header-note'>
      <div className='header-note__logo'>
        <a href=""><TiClipboard /></a>
        <h2>Personal Notes</h2>
      </div>
      <div>
        <ToggleThemeButton />
      </div>
      <div className='header-note__navigation'>
        <Link to="/createNote"><TbPencilPlus/></Link>
        <Link to="/"><BiHomeAlt/></Link>
        <Link to="/archieve"><RiInboxArchiveLine /></Link>
        <Link><button onClick={logout}><FiLogOut /></button></Link>
        <p>{name}</p>
      </div>
    </nav>
  )
}

HeaderPage.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default HeaderPage
