import React from 'react'
import { Post } from '../components/Post'
import data from "./data.json"

export function Posteos({ handleAddTotalLike }) {

  const post = data.map()

  return (
    <div className='container'>
      <Post post={post} key={post.id} handleAddTotalLike={handleAddTotalLike}/>
    </div>
  )

}
