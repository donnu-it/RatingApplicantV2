import React from 'react';

import logo from './../assets/img/logo.png';

const Header = (props) => {
  return (
   <div className="header">
     <img src={logo} alt="logo" />
     <h1 className="header__title">Розрахунок конкурсного бала</h1>
   </div>
  );
};

export default Header;