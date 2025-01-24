import React, { createContext, useState } from "react";
import Comp2 from "./Comp2";
import './Comp.css'

export const UserApp = createContext();

function Comp1() {
  const [name, setName] = useState("Guest");
  return (
    <div className="box1">
      <UserApp.Provider value={name}>
        <h2>Parent</h2>
        <p className='p'>Welcome {name === "" ? "Guest" : name}</p>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Comp2 />
      </UserApp.Provider>
    </div>
  );
}

export default Comp1;
