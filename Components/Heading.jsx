import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {
  const [startVal,setStartVal] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="container1 bg-orange-100">
      <div className="imgContainer">
        <img className="imageRes" src="https://tse3.mm.bing.net/th?id=OIP.DJXkSF9B--LYE8SM7M8yCAHaHa&pid=Api&P=0&h=180" alt="imgLogo" />
        <h3 className="logoText font-bold text-xl mt-2 ml-2">AbhiRestra</h3>
      </div>
      <div className="listContainer mt-2">
        <ul>
          <li className="font-semibold">
            Status: {onlineStatus? "✅" : "🚫"}
          </li>
          <li className="font-semibold"><Link to={"/"}>Home</Link></li>
          <li className="font-semibold"><Link to={"/about"}>About</Link></li>
          <li className="font-semibold"><Link to={"/contact"}>Contact</Link></li>
          <li className="font-semibold"><Link to={"/feedBack"}>FeedBack</Link></li>
          <button className="login bg-green-200 px-2 font-semibold" onClick={()=>{
            (startVal === "login")?setStartVal("logout"):setStartVal("login");
          }}>{startVal}</button>
        </ul>
      </div>
    </div>
  )
}

export default Heading;