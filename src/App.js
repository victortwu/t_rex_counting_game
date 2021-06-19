import React, { Component } from 'react'
import Plates from './components/Plates'
import GameController from './components/GameController'
import AnswerCard from './components/AnswerCard'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      answer: null,
      plates: []
    }
  }

makeCard =(answer)=> {

  this.setState({
    answer: answer
  })
}

makePlates =()=> {
  console.log('makePlates() called...')
  let copyPlates = []
  for (let i = 0; i < 4; i++) {
    const plateNode = {className: 'plate', value: Math.floor(Math.random() * 10 + 1)}
    copyPlates.push(plateNode)
  }
  const answer = copyPlates[Math.floor(Math.random() * copyPlates.length)].value
  console.log('Before makeCard called: ', answer)
  this.setState({
      plates: copyPlates
  })
  this.makeCard(answer)
}



render() {
console.log(this.state.plates)
console.log(this.state.answer)
  return (
    <main className='mainContainer'>
        <div className='heading'>
        heading
        </div>
        <div className='cardDiv'>
            <AnswerCard answer={this.state.answer}/>
        </div>
        <div className='platesDiv'>
            <Plates plates={this.state.plates} makePlates={this.makePlates}/>
        </div>
        <div className='trexDiv'>
        trex
        </div>

        <div className='scoreBoardDiv'>
            <GameController makePlates={this.makePlates}/>
        </div>
        <footer>footer</footer>


    </main>
  )
}

}

export default App;
