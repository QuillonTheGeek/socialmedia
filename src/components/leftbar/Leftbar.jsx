import './Leftbar.scss'
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import MemoryTwoToneIcon from '@mui/icons-material/MemoryTwoTone';
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import CollectionsTwoToneIcon from '@mui/icons-material/CollectionsTwoTone';
import VideoLibraryTwoToneIcon from '@mui/icons-material/VideoLibraryTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
           <div className="user">
          <img src="https://images.pexels.com/photos/5721094/pexels-photo-5721094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>Quillon</span>
        </div>
        <div className="item">
          <GroupAddTwoToneIcon className='icon'/>
          <span>Friends</span>
        </div>
        <div className="item">
          <Groups2TwoToneIcon className='icon'/>
          <span>Groups</span>
        </div>
        <div className="item">
          <StoreTwoToneIcon className='icon'/>
          <span>Marketplace</span>
        </div>
          <div className="item">
            <WatchLaterTwoToneIcon className='icon'/>
            <span>Watch</span>
          </div>
          <div className="item">
            <MemoryTwoToneIcon className='icon'/>
            <span>Memories</span>
          </div>
          </div>

          <hr/>
          <div className="menu">
            <span>Your shortcuts</span>
          <div className="item">
            <EventAvailableTwoToneIcon className='icon'/>
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsTwoToneIcon className='icon'/>
            <span>Gaming</span>
          </div>
          <div className="item">
            <CollectionsTwoToneIcon className='icon'/>
            <span>Gallery</span>
          </div>
          <div className="item">
            <ChatTwoToneIcon className='icon'/>
            <span>Messages</span>
          </div>
          </div>
          <hr/>

          <div className="menu">
            <span>Others</span>
          <div className="item">
            <VideoLibraryTwoToneIcon className='icon'/>
            <span>Videos</span>
          </div>
          <div className="item">
            <AttachMoneyTwoToneIcon className='icon'/>
            <span>Funding</span>
          </div>
          <div className="item">
            <LocalLibraryTwoToneIcon className='icon'/>
            <span>Tutorial</span>
          </div>
          <div className="item">
            <MenuBookTwoToneIcon className='icon'/>
            <span>Courses</span>
          </div>

          </div>

        
      </div>
    </div>
  )
}

export default Leftbar