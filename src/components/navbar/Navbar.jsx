import './Navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from './../../context/authContext';

const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext)
  
  return (
    <div className="navbar">
      <div className="left">
        <Link to='/' style={{ textDecoration:'none' }}>
        <span>Q-sociopedia</span>
        </Link>
        <HomeOutlinedIcon/>
       {darkMode ? 
       (<DarkModeOutlinedIcon onClick = { toggle } />) :
       (<WbSunnyOutlinedIcon onClick = { toggle } />)}
        <GridViewOutlinedIcon/>
        <div className="search">
        <SearchOutlinedIcon/>
        <input type="text" placeholder='Search...' />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsActiveOutlinedIcon/>

        <div className="user">

          {/* <img src="https://images.pexels.com/photos/5721094/pexels-photo-5721094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>Quillon</span> */}

          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>

        </div>
        
        </div>
    </div>
  )
}

export default Navbar