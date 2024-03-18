import { useState } from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  const [startVal,setStartVal] = useState("login");
  return (
    <div className="container1">
      <div className="imgContainer">
        <img className="imageRes" src="https://tse3.mm.bing.net/th?id=OIP.DJXkSF9B--LYE8SM7M8yCAHaHa&pid=Api&P=0&h=180" alt="imgLogo" />
        <h3 className="logoText">AbhiRestra</h3>
      </div>
      <div className="listContainer">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/feedBack"}>FeedBack</Link></li>
          <button className="login" onClick={()=>{
            (startVal === "login")?setStartVal("logout"):setStartVal("login");
          }}>{startVal}</button>
        </ul>
      </div>
    </div>
  )
}

export default Heading;