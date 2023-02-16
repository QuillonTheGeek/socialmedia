import './Posts.scss'
import Post from './../post/Post';


const Posts = () => {
  
  const posts = [
    {
      id: 1,
      name: 'Olalekan',
      userId: 1,
      profilePic: 'https://images.pexels.com/photos/14019734/pexels-photo-14019734.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, dolores.',
      img: 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'DevOp',
      userId: 2,
      profilePic: 'https://images.pexels.com/photos/5935787/pexels-photo-5935787.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, dolores.',
      img: 'https://images.pexels.com/photos/11355572/pexels-photo-11355572.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Java Lord',
      userId: 3,
      profilePic: 'https://images.pexels.com/photos/14019734/pexels-photo-14019734.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, dolores.',
      img: 'https://images.pexels.com/photos/1573460/pexels-photo-1573460.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ]
  return (
    <div className="posts">
      {posts.map(post => (
        <div className="post">
          <Post post={post} key = {post.id} />
        </div>
      ))}
    </div>
  )
}

export default Posts