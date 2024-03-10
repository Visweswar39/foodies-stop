import React, { useEffect, useState } from 'react'

function Cart() {
  const [count, setCount] = useState(0);
  
  
  useEffect(()=>{
    console.log('component did mount');
  },[count])
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default Cart;