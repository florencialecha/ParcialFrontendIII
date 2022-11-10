import React, { useState } from 'react'

export function Post({ handleAddTotalLike, post }) {

  const [countLikesPost, setCountLikesPost] = useState(post.likes);
    const handleAddlLikePost = () => {
        setCountLikesPost(countLikesPost + 1)
        handleAddTotalLike()
        console.log("Suma 1 like: "+ post.titulo);
      }

  return (
    <div className='posteo'>
      <h3>{post.titulo}</h3>
      <p>{post.texto}</p>
      <button onClick={handleAddlLikePost}>👍</button>
      <h5>{countLikesPost <= 10 ?  "Likes: " + countLikesPost : "Más de 10 likes."}</h5>
    </div>
  )

}
