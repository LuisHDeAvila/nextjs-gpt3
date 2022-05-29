import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import Image from 'next/image'; 
import Link from 'next/link';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="landingpage1__navbar">
      <div className="landingpage1__navbar-links">
        <div className="landingpage1__navbar-links_logo">
          <Image src={logo} />
        </div>
        <div className="landingpage1__navbar-links_container">
          <Link href="#home">
            <p><a >Home</a></p>
          </Link>
          <Link href="#wlandingpage1">
            <p><a >What is landingpage1?</a></p>
          </Link>
          <Link href="#possibility">
            <p><a >Open AI</a></p>
          </Link>
          <Link href="#features">
            <p><a >Case Studies</a></p>
          </Link>
          <Link href="#blog">
            <p><a >Library</a></p>
          </Link>
          
        </div>
      </div>
      <div className="landingpage1__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="landingpage1__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="landingpage1__navbar-menu_container scale-up-center">
          <div className="landingpage1__navbar-menu_container-links">
            <Link href="#home">
              <p><a >Home</a></p>
            </Link>
            <Link href="#wlandingpage1">
              <p><a >What is landingpage1?</a></p>
            </Link>
            <Link href="#possibility">
              <p><a >Open AI</a></p>
            </Link>
            <Link href="#features">
              <p><a >Case Studies</a></p>
            </Link>
            <Link href="#blog">
              <p><a >Library</a></p>
            </Link>
          </div>
          <div className="landingpage1__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
