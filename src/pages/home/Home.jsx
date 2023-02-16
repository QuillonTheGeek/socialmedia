import React from 'react'
import Stories from '../../components/stories/Stories'

import './Home.scss'
import Posts from './../../components/posts/Posts';

const Home = () => {
  return (
    <div className='home'>
    <Stories/>
    <Posts/>
    </div>
  )
}

export default Home