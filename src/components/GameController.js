import '../App.js'

const GameController = (props) => {

  return(
    <>
    game controller
    <button onClick={()=> props.makePlates()}>make plates</button>
    <h1>Score: {props.score}, Chances left: {props.chances}</h1>
    </>
  )
}

export default GameController
