import React from 'react';
import './Header.css';

const Header = ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1920px-Netflix_2014_logo.svg.png"
            alt="logo-netflix"
          ></img>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://img1.gratispng.com/20180506/lkw/kisspng-computer-icons-netflix-symbol-desktop-wallpaper-do-5aef44b8cb7d22.9132290215256301368335.jpg"
            alt="Usuário"
          ></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
