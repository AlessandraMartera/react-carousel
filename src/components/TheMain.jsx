import Card from './Card'
import { useState, useEffect } from 'react'



export default function TheMain() {
const imageArray = ['ironman.jpg','marvelcomics.jpg','mountain.jpg','spiderman.jpg'];

let [counter, setCounter] = useState(0)

useEffect(() => {
  const intervalId = setInterval(() => {
    if (counter < imageArray.length - 1) {
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      setCounter(0);
    }
  }, 5000);

  return () => clearInterval(intervalId); 
}, [counter, imageArray.length]);

/*
function timerSlide(){
  setInterval(() => {
    if(counter < (imageArray.length - 1)){
      setCounter(counter + 1);
    }else{
      setCounter(0);
    }
  }, 5000);
}
*/

// timerSlide();
      
    return (
      <>
     
       <main>
        <div className='centralContainer'>
          <button className={"button prev " + (counter === 0 && "hidden")} onClick={() => {
            setCounter(counter - 1);
            }}>Prev</button>
            {imageArray.map((image, idx) => <Card key={idx} image={image} idx={idx} counter={counter} /> )}
          <button className={"button next " + (counter === 3 && "hidden")}  onClick={() => {setCounter(counter + 1)}}>next</button>
        </div>
         
        <div className='dotList'>
          {imageArray.map((image, idx) =><div key={idx} className={"dot " + (idx===counter && "active")} onClick={() => {
            setCounter(idx);
            }}></div> )}
        </div>
       </main>
      </>
    )
  }
  
  