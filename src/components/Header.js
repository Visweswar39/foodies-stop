import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";


const HeaderComponent = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='instamart'>Insta mart</Link></li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {!isUserAuthenticated ? <button onClick={()=>{setIsUserAuthenticated(true)}}> login</button> : <button onClick={()=>{setIsUserAuthenticated(false)}}> logout</button>}
    </div>
  );
};

export default HeaderComponent;
