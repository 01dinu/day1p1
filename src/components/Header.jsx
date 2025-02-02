import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="container">
      <nav>
        <div className="logo">BrandName</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop<i className="fa fa-chevron-down" aria-hidden="true" style={{ fontSize: '0.8em', marginLeft: '5px'}}></i></Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/pages">Pages</Link></li>
        </ul>
        <div className="nav-actions">
        <a href="" className="search" style={{ color: '#23A6F0' }}><i className="fas fa-user"></i></a>
          <Link to="/login" className='link'>Login / Register</Link>
          <div className="mobile-menu">
          <a href="#search" className="search" style={{ color: '#23A6F0' }}><i className="fa fa-search"></i></a>
          <a href="#cart" className="cart"><i className="fa fa-shopping-cart" style={{ color: '#23A6F0' }}></i></a> {/* FontAwesome Icon */}
          
          <a href="#menu" className="menu"><i className="fa fa-heart" style={{ color: '#1e90ff' }}></i></a>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;