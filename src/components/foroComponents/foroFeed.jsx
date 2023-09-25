import React from 'react'
import { useSelector } from 'react-redux';
import "./postStyle.scss"
import { PostCard } from './postCard';

export const ForoFeed = () => {

    const {posts} = useSelector ( state => state.granjApp);

  return (
    <div className='feed-container'>

    {

      posts.map ( posts => (
        <PostCard key={posts.id} {...posts} />
      ))
     
    }
   
    
   
  
  </div>
  )
}
