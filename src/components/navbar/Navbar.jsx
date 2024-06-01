import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

import { AuthContext } from "../../context/authContext";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const {currentUser, logout} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogOut = () => {
      logout()
      navigate('/login')
  }


  console.log(currentUser)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
        
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
    
          <div className="item">
            {currentUser && <img
              src={currentUser.photo}
              alt=""
              className="avatar"
            />

            }


           { currentUser && <button 
            style={{backgroundColor : "#ff9900", marginLeft:' 20px',  fontWeight : 800, color : 'white', padding : "8px", border : 'none', borderRadius : '5px'}} onClick={handleLogOut}>
            Logout</button>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
