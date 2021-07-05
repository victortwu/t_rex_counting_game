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


  let plates

    if ( props.score >= 100 ) {


      alert('YOU WON!')
      props.endGame()

    } else {
      const appendDrumsticks = (len) => {
        let drumSticks = []
        for (let i = 0; i < len; i++) {
          drumSticks.push(<div className='drumStick'></div>)
        }
        return drumSticks
      }

      plates = props.plates.map((plate, index)=> {

        return(
          <div
            key={index}
            className={plate.className}
            onClick={
              (e)=> props.checkAnswer(plate.value, e)

            }
          >

            {appendDrumsticks(plate.value)}

          </div>
          )
        })
    }





  return(
    <>
    {nextLevelMessage()}
    {plates}
    </>
  )
}

export default Plates2
