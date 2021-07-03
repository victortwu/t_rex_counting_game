import React, { Component } from 'react'
import '../App.css'

class Plates extends Component {
  constructor(props){
    super(props)
  }




  render(){
    console.log(this.props.score)
    console.log(this.props.chances)
    let plates
    const checkWinner =()=> {
      if ( this.props.score >= 50 ) {
        
        alert(`YOU WON! You got ${this.props.score} bones!`)
        this.props.endGame()

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
    }

    if (this.props.platesOn){
      checkWinner()
    }





    return(
      <>
      {plates}
      </>
    )


  }
}



export default Plates
