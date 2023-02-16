import './Stories.scss'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const  Stories = () => {

    const { currentUser } = useContext(AuthContext)

// TEMPORARY
const stories = [
    {
        id: 1,
        name:'Quillon ',
        img: 'https://images.pexels.com/photos/14019734/pexels-photo-14019734.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id: 2,
        name:'Quillon ',
        img: "https://images.pexels.com/photos/5380638/pexels-photo-5380638.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 3,
        name:'Quillon ',
        img: "https://images.pexels.com/photos/5380646/pexels-photo-5380646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        name:'Quillon ',
        img: "https://images.pexels.com/photos/5380638/pexels-photo-5380638.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

];
return (
    <div className="stories">
          <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button> + </button>
            </div>
        {stories.map(story => (
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
)}

export default Stories