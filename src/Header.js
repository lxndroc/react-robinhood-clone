// https://github.com/lxndroc/react-robinhood-clone

import React from 'react';
import { SearchOutline } from '@material-ui/icons';
import './Header.css';
import Logo from './robinhood.svg';

function Header() {
  return (
    <div className='header__wrapper'>
      {/* logo */}
      <div className='header__logo'>
        <img src={Logo} width={25} />
      </div>
      {/* search */}
      <div className='header__search'>
        <div className='header__searchContainer'>
          <SearchOutline />
          <input placeholder='Search' type='text' />
        </div>
      </div>
      {/* menu items */}
      <div className='header__menuItems'>
        <a href='/'>Free Stocks</a>
        <a href='/'>PortFolio</a>
        <a href='/'>Cash</a>
        <a href='/'>Messages</a>
        <a href='/'>Account</a>
      </div>
    </div>
  );
}

export default Header;
