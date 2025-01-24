import React, { useContext } from 'react'
import { UserApp } from './Comp1'

function Comp4() {
    const user = useContext(UserApp)
  return (
    <div className="box4">
      <h2>Child 3</h2>
      <p className='p'>Welcome {user === "" ? "Guest" : user}</p>
    </div>
  )
}

export default Comp4
