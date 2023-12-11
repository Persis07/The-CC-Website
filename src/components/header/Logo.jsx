import React from 'react';
import CClogo from "../header/CClogo.png"

const Logo = ({ width, marginRight, paddingTop }) => {
    const logoStyle = {
      width: width || '150px', 
      marginRight: marginRight || '900px', 
      paddingTop: paddingTop || `5px`,
    };
  
    return <> <div className='logo'>
    <img src={CClogo} alt="CC Logo" style={logoStyle} />;

    </div>
</>
  };
  
  export default Logo;