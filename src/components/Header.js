import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";


const HeaderComponent = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  return (
    <div className="flex bg-blue-100 justify-between mt-10 shadow-md mx-2 border-black border-2 p-2 items-center">
      <Title />
      <div className="flex flex-row sm:flex-col">
        <ul className="flex flex-row gap-4">
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
