import React from 'react'
import { Post } from '../components/Post'
import data from "./data.json"

export function Posteos({ handleAddTotalLike }) {

  const post = data.map(post => <Post key={post.id} handleAddTotalLike={handleAddTotalLike} post={post}/>)

  return (
    <div className='container'>
      {post}
    </div>
  )

}
