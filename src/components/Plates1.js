import React from 'react'
import '../App.css'

const Plates1 =(props)=> {

  let plates

      if ( props.score >= 50 ) {

        props.endLevelOne()

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
              onClick={(e)=> props.checkAnswer(plate.value, e)}
            >
              {appendDrumsticks(plate.value)}
            </div>
            )
          })
      }

    return(
      <>
      {plates}
      </>
    )

}

export default Plates1
