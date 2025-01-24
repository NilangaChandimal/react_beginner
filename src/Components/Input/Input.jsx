import React, { useEffect, useRef, useState } from 'react'

function Input() {
    const [input, setInput] = useState('<Input Text goes here>');
    const [count, setCount] = useState(0);
    const countref = useRef(0);
    const inputref = useRef();
    const inputref1 = useRef();
    const inputref2 = useRef();
    
    const handlechange = (e) => {
      if (e.target.value.length == 0) {
        setInput('<Input Text goes here>');
      } else {
        setInput(e.target.value);
      }
    }
    
    useEffect(() => {
        // setCount((count) => count + 1);
        countref.current = countref.current + 1;
        inputref.current.style.backgroundColor = 'red';
        inputref1.current.style.backgroundColor = 'green';
    })

    const handleclick = () => {
        if(inputref2.current.value == ""){
            inputref2.current.focus()
        }else if(inputref2.current.value > 50){
            alert("Success")
        }else{
            alert("Error")
        }
    }
  return (
    <div>
      <input type="text" onChange={handlechange} ref={inputref1}/>
      <p>You Have Input {input}</p>
      <p>Rendered {countref.current}</p>
      <input type="text" ref={inputref}/>
      <br /><br /><br />
      <input type="text" ref={inputref2}/>
      <button onClick={handleclick}>Validate</button>
    </div>
  )
}

export default Input
