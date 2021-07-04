import React, { Component } from 'react'
import '../App.css'

class Plates extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: true
    }
  }

setMessage =()=> {
  this.setState({
    message: false
  })
}

levelOneMessage =()=> {
  alert('You got to the next level!')
}

  render(){

    if (this.props.score >= 50 && this.state.message === true) {
        this.levelOneMessage()
        this.setMessage()
        this.props.makeAdditionPlates()
    }

    let plates
    const checkWinner =()=> {
      console.log('CHECKWINNER CALLED')
      if ( this.props.score >= 100 ) {

        alert(`YOU WIN! You got ${this.props.score} bones!`)
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
