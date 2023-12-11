import React from 'react';


const NavBar = () => {
  const navBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
   
    padding: '20px',
    paddingLeft: '800px', 
    color: 'black',
    paddingTop: `80px`
  };

    const navLinkStyle = {
    textDecoration: 'none',
    color: 'black',
    margin: '0 15px',
  };

  return (

    
    <div style={navBarStyle}>
         
      <div>
       
        <a href="#" style={navLinkStyle}>
          Home
        </a>
        <a href="#" style={navLinkStyle}>
          Services
        </a>
        <a href="#" style={navLinkStyle}>
          Projekte
        </a>
        <a href="#" style={navLinkStyle}>
          Agentur
        </a>
        <a href="#" style={navLinkStyle}>
          Kontakt
        </a>
      </div>
    </div>
  );
};

export default NavBar;