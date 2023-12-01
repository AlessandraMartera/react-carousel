

export default function Card({image, idx, counter}) {

   
  return (
    <>
      <div className={ "card " + (idx === counter && 'active')} >
            <img src={image} alt="label" />
    
      </div>
    </>
  )
}
