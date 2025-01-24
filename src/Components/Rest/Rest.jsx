import React from 'react'

function Rest() {
    function sum(...somenumbers) {
        let total = 0;
        somenumbers.forEach(somenumber => {
            total += somenumber;
        });
        return total;
      }

      console.log(sum(1, 2, 3, 4, 5));
    let a = [1,2,3,4,5,6,7,8,9,10];
    console.log(Math.min(...a, a.length));
  return (
    <>
    </>
  )
}

export default Rest
