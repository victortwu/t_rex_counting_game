import React, { Component } from 'react'
import '../App.css'

class Plates extends Component {
  constructor(props){
    super(props)

  }

render(){


  const appendDrumsticks = (len) => {
    let drumSticks = []
    for (let i = 0; i < len; i++) {
      drumSticks.push(<div className='drumStick'></div>)
    }
    return drumSticks
  }

  const plates = this.props.plates.map((plate, index)=> {
    const ref = React.createRef()
    return(
      <div
        key={index}
        ref={ref}
        className={plate.className}
        onClick={(e)=> this.props.checkAnswer(plate.value, e)}
      >

        {appendDrumsticks(plate.value)}

      </div>
      )
    })

  return(
    <>
    {plates}
    </>
  )
}

}

export default Plates
