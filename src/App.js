import React, { Component } from 'react'
import Plates from './components/Plates'
import GameController from './components/GameController'
import AnswerCard from './components/AnswerCard'
import Trex from './components/Trex'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.trexRef = React.createRef()
    this.state = {
      count: 0,
      score: 0,
      chances: 5,
      answer: null,
      plates: [],
    }
  }


setCard =(answer)=> {
  this.setState({
    answer: answer
  })
}


incrementCount =()=> {
  let current = this.state.count
  let increment = current + 1
  this.setState({
    count: increment
  })
}


makePlates =()=> {
  setTimeout(()=> {
    let copyPlates = []
    for (let i = 0; i < 4; i++) {
      const plateNode = {className: 'plate', value: Math.floor(Math.random() * 10 + 1)}
      copyPlates.push(plateNode)
    }
    const answer = copyPlates[Math.floor(Math.random() * copyPlates.length)].value
    this.setState({
        plates: copyPlates
    })
    this.setCard(answer)
  }, 2500)

}


trexEat1 = () => {
  this.trexRef.current.style.animation = 'trexEating1 2s linear forwards'
}

trexEat2 = () => {
  this.trexRef.current.style.animation = 'trexEating2 2s linear forwards'
}


feedPlate1 =(e)=> {
  e.preventDefault()
  e.target.style.animation = 'feedingPlate1 2s linear'
}

feedPlate2 =(e)=> {
  e.preventDefault()
  e.target.style.animation = 'feedingPlate2 2s linear'
}


checkAnswer =(plateItems, e)=> {

  if (plateItems === this.state.answer) {
    const score = this.state.score + this.state.answer
    this.setState({
      score: score
    })
    this.incrementCount()

    if(this.state.count % 2 === 0){
      this.trexEat1()
      this.feedPlate1(e)

    } else {
      this.trexEat2()
      this.feedPlate2(e)

    }
    this.makePlates()


    // alert(`Correct! You scored ${this.state.answer} bones!`)

  } else {

    let chances = this.state.chances - 1
    this.setState({
      chances: chances
    })
    alert(`Wrong!`)
    this.makePlates()
  }
}



render() {

  return (

    <main className='mainContainer'>
        <div className='heading'>
        heading
        </div>
        <div className='cardDiv'>
            <AnswerCard answer={this.state.answer}/>
        </div>
        <div className='platesDiv'>
            <Plates
              plates={this.state.plates}
              checkAnswer={this.checkAnswer}
            />
        </div>
        <div className='trexDiv'>
            <Trex ref={this.trexRef}/>
        </div>

        <div className='scoreBoardDiv'>
            <GameController
            makePlates={this.makePlates}
            score={this.state.score}
            chances={this.state.chances}
            trexEat={this.trexEat}
            trexEat2={this.trexEat2}
            />
        </div>
        <footer>footer</footer>


    </main>

  )
}

}

export default App;
