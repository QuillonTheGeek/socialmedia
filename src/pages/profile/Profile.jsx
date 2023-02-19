import '../../style.scss';
import './Profile.scss'

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from './../../components/posts/Posts';


const Profile = () => {
  return (
    <div className='profile' >
      <div className="images">
        <img src="https://images.pexels.com/photos/5380665/pexels-photo-5380665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='cover'/>
        <img src="https://images.pexels.com/photos/5721094/pexels-photo-5721094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="userInfo">

    <div className="left">
      <a href="http://facebook.com">
        <FacebookTwoToneIcon fontSize='large'/>
      </a>
      <a href="http://twitter.com">
        <TwitterIcon fontSize='large'/>
      </a>
      <a href="http://instagram.com">
        <InstagramIcon fontSize='large'/>
      </a>
      <a href="http://linkedin.com">
        <LinkedInIcon fontSize='large'/>
      </a>
      <a href="http://pinterest.com">
        <PinterestIcon fontSize='large'/>
      </a>

    </div>

    <div className="center">
      <span>Quillon </span>
      <div className="info">
        <div className="item">
          <PlaceIcon/>
          <span>Nigeria</span>
        </div>
        <div className="item">
          <LanguageIcon/>
          <span>React.Js</span>
        </div>
      </div>
        <button>follow</button>
    </div>
    <div className="right">
      <EmailIcon/>
      <MoreVertIcon/>
    </div>
  </div>
  </div> 
  < Posts/> 
      
    </div>
  )
}

export default Profile