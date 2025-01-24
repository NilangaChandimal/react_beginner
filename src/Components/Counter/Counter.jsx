import React, { useState, useEffect } from 'react'
import './Counter.css'

function Counter() {
    const style = {
        backgroundColor: 'red'
    }
const[count, setcount] = useState(0)
const[clicks, setclicks] = useState(0)
const[posts, setposts] = useState([])

const decrementFunction = () => {
    setcount(count - 1)
}

const incrementFunction = () => {
    setcount(count + 1)
}
let number = 10;

useEffect(() => {
    if (number == 5) {
        alert('Equal to 5')
    } else {
        alert('Not equal to 5')
    }  
},[])


// useEffect(() => {
//     console.log('hi')
// },[count])

useEffect(() => {
    document.title = `You clicked ${clicks} times`
}, [count])

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
     .then(response => response.json())
     .then(json => setposts(json))

    console.log('run')
},[])

  return (
    <>
      <h1 style={style}>Counter</h1>
      <button onClick={decrementFunction}>-</button>
      <button onClick={incrementFunction}>+</button>
      <p>{count}</p>

      <p> you clicked {clicks} times</p>
      <button onClick={() => setclicks(clicks + 1)}>Click me</button>

      <ul className='prod_list' style={{ color: 'white', paddingLeft: '20px'}}>
          {posts && posts.map((post) => <li key={post.id} style=
          {{ listStyleType: 'circle' }}>{post.title }</li>)}
      </ul>
    </>
  )
}

export default Counter
