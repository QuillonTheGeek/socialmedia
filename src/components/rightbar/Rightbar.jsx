import './Rightbar.scss'

import pics2 from '../../assets/2.jpg'
import pics3 from '../../assets/3.jpg'
import pics4 from '../../assets/4.jpg'
import pics5 from '../../assets/5.jpg'
import pics6 from '../../assets/6.jpg'
import pics7 from '../../assets/7.jpg'
import pics8 from '../../assets/8.jpg'
import pics9 from '../../assets/9.jpg'
import pics10 from '../../assets/10.jpg'
import pics11 from '../../assets/11.jpg'
import pics1 from '../../assets/1.jpg'


const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/5721094/pexels-photo-5721094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
              <span>Quillon the Geek</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/5721094/pexels-photo-5721094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
              <span>Quillon the Geek</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
            <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/5721094/pexels-photo-5721094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
              <p>
              <span>Quillon </span>changed their cover photo
              </p>
            </div>
            <span>  2 min ago </span>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/5721094/pexels-photo-5721094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
              <p>
              <span>Quillon </span>followed a page
              </p>
            </div>
            <span>  2 min ago </span>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/5721094/pexels-photo-5721094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
              <p>
              <span>Quillon </span>liked a comment
              </p>
            </div>
            <span>  1 min ago </span>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/5721094/pexels-photo-5721094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
              <p>
              <span>Quillon </span>posted an update
              </p>
            </div>
            <span>   30 sec ago </span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
            <div className="user">
            <div className="userInfo">
              <img src={pics2} alt="" />
              <div className="online"></div>
              <span>Butler Sam </span>
            </div>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src={pics3} alt="" />
              <div className="online"></div>
              <span>Go Chan yuan </span>
            </div>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src={pics4} alt="" />
              <div className="online"></div>
              <span>Rouland Philp </span>
            </div>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src={pics5} alt="" />
              <div className="online"></div>
              <span>Hacker  </span>
            </div>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src={pics6} alt="" />
              <div className="online"></div>
              <span>CSS Lord </span>
            </div>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src={pics7} alt="" />
              <div className="online"></div>
              <span>JavaScript King </span>
            </div>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src={pics8} alt="" />
              <div className="online"></div>
              <span>Lama Dev </span>
            </div>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src={pics9} alt="" />
              <div className="online"></div>
              <span>Mosh Code</span>
            </div>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src={pics10} alt="" />
              <div className="online"></div>
              <span>John doe </span>
            </div>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src={pics11} alt="" />
              <div className="online"></div>
              <span>Geekify </span>
            </div>
          </div>
            <div className="user">
            <div className="userInfo">
              <img src={pics1} alt="" />
              <div className="online"></div>
              <span> Tray white </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Rightbar