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
      platesOn: true,
      count: 0,
      score: 0,
      chances: 5,
      answer: null,
      displayAnswer: '',
      plates: [],
    }
  }


setCard =(answer, displayAnswer)=> {
  this.setState({
    answer: answer,
    displayAnswer: displayAnswer
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
  console.log('makePlates called')
  console.log(this.state.score)

    setTimeout(()=> {
      let copyPlates = []
      for (let i = 0; i < 4; i++) {
        const plateNode = {
          className: 'plate',
          value: Math.floor(Math.random() * 10 + 1),
        }
        copyPlates.push(plateNode)
      }
      const randomIndex = Math.floor(Math.random() * copyPlates.length)
      const diplayAnswer = `${copyPlates[randomIndex].value}`
      const answer = copyPlates[randomIndex].value
      this.setState({
          plates: copyPlates
      })
      this.setCard(answer, diplayAnswer)
    }, 2500)
  }

  makeAdditionPlates =()=> {
    console.log('makeAdditionPlates called')
    // console.log(this.state.score)
    
      setTimeout(()=> {
        let copyPlates = []
        const randomNumber =()=> {
          return Math.floor(Math.random() * 10 + 1)
        }
        for (let i = 0; i < 4; i++) {
          let num1 = randomNumber()
          let num2 = randomNumber()
          let diff = 10 - num1
          let sum = num1 + num2
          if(sum > 10){
            num2 = diff
            sum = num1 + num2
          }
          const plateNode = {
            className: 'plate',
            num1: num1,
            num2: num2,
            value: sum,
          }
          copyPlates.push(plateNode)
        }
        const randomIndex = Math.floor(Math.random() * copyPlates.length)
        const displayAnswer = `${copyPlates[randomIndex].num1} + ${copyPlates[randomIndex].num2}`
        const answer = copyPlates[randomIndex].num1 + copyPlates[randomIndex].num2
        this.setState({
            plates: copyPlates
        })
        this.setCard(answer, displayAnswer)
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

endGame =()=> {
  this.setState({
    plates: [],
    score: 0,
    platesOn: false
  })
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
    if(this.state.score > 50){
      this.makeAdditionPlates()
    } else {
      this.makePlates()
    }

    // alert(`Correct! You scored ${this.state.answer} bones!`)
  } else {

    let chances = this.state.chances - 1
    this.setState({
      chances: chances
    })
    alert(`Wrong!`)
    if(this.state.chances > 1){
      if(this.state.chances === 2){
        alert('Last try left!')
      }
      if(this.state.score > 50){
        this.makeAdditionPlates()
      } else {
        this.makePlates()
      }

    }
    else {
      alert('Game Over')//need a modal to cover up everything
      this.endGame()
    }
  }
}

play =()=> {
  this.setState({
    plates: [],
    score: 0,
    chances: 5,
    platesOn: true
  })
  this.makePlates()
}



render() {
console.log(this.state.plates)
console.log(this.state.answer)
console.log(this.state.displayAnswer)
  return (

    <main className='mainContainer'>
        <div className='heading'>
        heading
        </div>
        <div className='cardDiv'>
            <AnswerCard answer={this.state.answer} displayAnswer={this.state.displayAnswer}/>
        </div>
        <div className='platesDiv'>
            <Plates
              makeAdditionPlates={this.makeAdditionPlates}
              platesOn={this.state.platesOn}
              endGame={this.endGame}
              plates={this.state.plates}
              checkAnswer={this.checkAnswer}
              score={this.state.score}
              chances={this.state.chances}
            />
        </div>
        <div className='trexDiv'>
            <Trex ref={this.trexRef}/>
        </div>

        <div className='scoreBoardDiv'>
            <GameController
              makeAdditionPlates={this.makeAdditionPlates}
              play={this.play}
              score={this.state.score}
              chances={this.state.chances}

            />
        </div>
        <footer>footer</footer>


    </main>

  )
}

}

export default App;
