import Card from './Card'
import { useState } from 'react'



export default function TheMain() {
const imageArray = ['ironman.jpg','marvelcomics.jpg','mountain.jpg','spiderman.jpg'];

let [counter, setCounter] = useState(0)

    return (
      <>
       <main>
        <div>
          <button className={"button " + (counter === 0 && "hidden")} onClick={() => setCounter(counter - 1)}>Prev</button>
            {imageArray.map((image, idx) => <Card key={idx} image={image} idx={idx} counter={counter} /> )}
          <button className={"button " + (counter === 3 && "hidden")}  onClick={() => {setCounter(counter + 1)}}>next</button>
        </div>
       </main>
      </>
    )
  }
  
  