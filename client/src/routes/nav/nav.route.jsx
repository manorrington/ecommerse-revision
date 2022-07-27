import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import '../../sass/nav.styles.scss'
import logo from '../../assets/images/newlogo.PNG'

const Nav = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img className='logo' src={logo} alt='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/'>
            HOME
          </Link>
          <Link className='nav-link' to='/products'>
            PRODUCTS
          </Link>
          <Link className='nav-link' to='/contact'>
            CONTACT
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;