import React, { useState } from 'react'
import { Estatus } from './components/Estatus';
import { Posteos } from './components/Posteos';

function App() {
  
  const [countTotalLikes, setCountTotalLikes] = useState(0);

  const handleAddTotalLike = () => {
    setCountTotalLikes(countTotalLikes + 1)
  } 

  return (
    <div className="App">
      <Estatus countTotalLikes={countTotalLikes} />
      <Posteos handleAddTotalLike={handleAddTotalLike}/>
    </div>
  );
  
}

export default App;
