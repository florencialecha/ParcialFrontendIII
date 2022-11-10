import React from 'react'
import { Post } from '../components/Post'
import data from "./data.json"

export function Posteos({ handleAddTotalLike }) {

  return (
    <div className='container'>
      {data.map(post => <Post key={post.id} handleAddTotalLike={handleAddTotalLike} post={post} />)}
    </div>
  )
  
}
