import React, { Component } from 'react'
import '../App.css'

class Plates extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: true
    }
  }



  render(){



    let plates
    
      if ( this.props.score >= 50 ) {


        // this.props.endGame()
        this.props.endLevelOne()

      } else {
        const appendDrumsticks = (len) => {
          let drumSticks = []
          for (let i = 0; i < len; i++) {
            drumSticks.push(<div className='drumStick'></div>)
          }
          return drumSticks
        }

        plates = this.props.plates.map((plate, index)=> {

          return(
            <div
              key={index}
              className={plate.className}
              onClick={
                (e)=> this.props.checkAnswer(plate.value, e)

              }
            >

              {appendDrumsticks(plate.value)}

            </div>
            )
          })
      }


    // if (this.props.levelOne){
    //   checkWinner()
    // }





    return(
      <>
      {plates}
      </>
    )


  }
}



export default Plates
