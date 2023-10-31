import React, { useEffect, useState } from 'react'

const LifeCylceUsingHooks = () => {
  const [color, setColor] = useState('red');

  
  useEffect(() => {
    console.log('component did mount');
    // setTimeout(() => {
    //   setColor('black');
    // }, 2000)
  }, [])
  console.log('component will mount');
  return (
    <div>
      <h4>My Favorite Color is {color}</h4>
    </div>
  )
}

export default LifeCylceUsingHooks