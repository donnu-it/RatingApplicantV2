import React from 'react';

import logo from './../assets/img/logo.png';

const Header = (props) => {
  return (
   <div className="App-header">
     <div className="container-fluid">
       <div className="row">
         <div className="col-lg-12">
           <img src={logo} className="App-logo" alt="logo" />
         </div>
        </div>
      </div>
   </div>
  );
};

export default Header;