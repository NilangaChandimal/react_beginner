import React, { useContext } from 'react'
import Comp4 from './Comp4'
import { UserApp } from './Comp1'

function Comp3() {
    const user = useContext(UserApp)
  return (
    <div className="box3">
      <h2>Child 2</h2>
      <p className='p'>Welcome {user === "" ? "Guest" : user}</p>
      <Comp4/>
    </div>
  )
}

export default Comp3
