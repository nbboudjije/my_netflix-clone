import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navbar.scss";
import { useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <span>Home</span>
          <span>Movies</span>
          <span>Series</span>
          <span>Anime</span>
          <span>My Fav</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kids</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>My Profile</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
