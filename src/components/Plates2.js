import React from 'react'
import '../App.css'

const Plates2 =(props)=> {


  const toggleClass = props.open ? 'show' : 'hide'

  const close =()=> {
    setTimeout(()=>{
      props.closeMessage()
    }, 3000)
  }


  const nextLevelMessage =()=> {
    close()
    return(
      <div className={toggleClass}>YOU GOT TO THE NEXT LEVEL!</div>
    )
  }


  return(
    <>
    {nextLevelMessage()}
    PLATES 2
    </>
  )
}

export default Plates2
