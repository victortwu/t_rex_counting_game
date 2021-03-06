import React, { Component } from 'react'
import Plates1 from './components/Plates1'
import Plates2 from './components/Plates2'
import GameController from './components/GameController'
import AnswerCard from './components/AnswerCard'
import Trex from './components/Trex'
import CorrectModal from './components/CorrectModal'
import WrongAnswerModal from './components/WrongAnswerModal'
import GameOverModal from './components/GameOverModal'
import YouWinModal from './components/YouWinModal'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.trexRef = React.createRef()
    this.backGroundRef = React.createRef()
    this.plateDivRef = React.createRef()
    this.cardDivRef = React.createRef()
    this.state = {
      levelOne: true,
      levelTwo: false,
      correctOpen: false,
      wrongOpen: false,
      nextLevelMessage: false,
      gameOverOpen: false,
      youWinOpen: false,
      count: 0,
      score: 0,
      chances: 5,
      answer: null,
      displayAnswer: '',
      plates: [],
    }
  }

openCorrectModal =()=> {
    this.setState({
      correctOpen: true
    })
}

closeCorrectModal =()=> {
  setTimeout(()=> {
    this.setState({
      correctOpen: false
    })
  }, 2500)
}

openWrongAnswerModal =()=> {
    this.setState({
      wrongOpen: true
    })
}

closeWrongAnswerModal =()=> {
  setTimeout(()=> {
    this.setState({
      wrongOpen: false
    })
  }, 1500)
}

setNextLevelMessage =()=> {
    this.setState({
      nextLevelMessage: true
    })
}

closeNextLevelMessage =()=> {
  setTimeout(()=> {
    this.setState({
      nextLevelMessage: false
    })
  }, 2500)
}

openGameOverModal =()=> {
    this.setState({
      gameOverOpen: true
    })
}

closeGameOverModal =()=> {
  setTimeout(()=> {
    this.setState({
      gameOverOpen: false
    })
  }, 5000)
}

openYouWinModal =()=> {
    this.setState({
      youWinOpen: true
    })
}

closeYouWinModal =()=> {
  setTimeout(()=> {
    this.setState({
      youWinOpen: false
    })
  }, 8000)
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
          className: 'plate1',
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
            className: 'plate1',
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

endLevelOne =()=> {

  this.setState({
    levelOne: false,
    levelTwo: true
  })
  this.setNextLevelMessage()
  this.closeNextLevelMessage()
  this.switchLevel2BackGround()
  this.makeAdditionPlates()
}

endGame =()=> {
  this.setState({
    plates: [],
    score: 0,
    levelTwo: false,
    levelOne: true,
    chances: 5
  })
  this.hidePlatesAndBubble()
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
    if(this.state.levelTwo){
      this.makeAdditionPlates()
    } else {
      this.makePlates()
    }
    this.openCorrectModal()
    this.closeCorrectModal()

  } else {

    let chances = this.state.chances - 1
    this.setState({
      chances: chances
    })
    this.openWrongAnswerModal()
    this.closeWrongAnswerModal()
    if(this.state.chances > 1){
      if(this.state.levelTwo){
        this.makeAdditionPlates()
      } else {
        this.makePlates()
      }

    }
    else {
      this.openGameOverModal()
      this.closeGameOverModal()
      this.endGame()
    }
  }
}

play =()=> {
  this.setState({
    plates: [],
    score: 0,
    chances: 5,
    levelOne: true
  })
  this.switchBackToLevel1BackGround()
  this.makePlates()
  this.showPlatesAndBubble()
}

switchLevel2BackGround =()=> {
  const animation = 'fadeBackground 1.5s linear forwards'
  this.backGroundRef.current.style.animation = animation
}

switchBackToLevel1BackGround =()=> {
  const level1BG = 'linear-gradient(#f7dfd3,#e2c3c8,#afafc7,#5f7daf)'
  this.backGroundRef.current.style.backgroundImage = level1BG
}

hidePlatesAndBubble =()=> {
  this.plateDivRef.current.style.display = 'none'
  this.cardDivRef.current.style.display = 'none'
}

showPlatesAndBubble =()=> {
  this.plateDivRef.current.style.display = 'flex'
  this.cardDivRef.current.style.display = 'flex'
}

render() {

  return (

    <main ref={this.backGroundRef} className='mainContainer'>
        <div className='heading'>
        <h1>T-Rex Counting Game</h1>
        </div>
        <div ref={this.cardDivRef} className='cardDiv'>
            <AnswerCard answer={this.state.answer} displayAnswer={this.state.displayAnswer}/>
        </div>
        <div ref={this.plateDivRef} className='platesDiv'>
            {
              this.state.levelOne ?
              <Plates1
                levelOne={this.state.levelOne}
                endLevelOne={this.endLevelOne}
                plates={this.state.plates}
                checkAnswer={this.checkAnswer}
                score={this.state.score}

              />
              :
              <Plates2
                score={this.state.score}
                open={this.state.open}
                closeMessage={this.closeMessage}
                checkAnswer={this.checkAnswer}
                plates={this.state.plates}
                openYouWinModal={this.openYouWinModal}
                closeYouWinModal={this.closeYouWinModal}
                endGame={this.endGame}
              />
            }

        </div>
        <div className='trexDiv'>
            <Trex ref={this.trexRef}/>
        </div>

        <div className='scoreBoardDiv'>
            <GameController
              play={this.play}
              score={this.state.score}
              chances={this.state.chances}

            />
        </div>
        <footer>
          <span>Built by Victor Twu</span>
          <span>victor607@gmail.com</span>
          <span>July 2021</span>
        </footer>

        <CorrectModal
          correctOpen={this.state.correctOpen}
          answer={this.state.answer}
          nextLevelMessage={this.state.nextLevelMessage}

        />

        <WrongAnswerModal
            wrongOpen={this.state.wrongOpen}
            gameOverOpen={this.state.gameOverOpen}
            chances={this.state.chances}
        />

        <YouWinModal youWinOpen={this.state.youWinOpen}/>

        <GameOverModal gameOverOpen={this.state.gameOverOpen} />

    </main>

  )
}

}

export default App;
