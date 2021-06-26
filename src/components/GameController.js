import '../App.js'

const GameController = (props) => {

  return(
    <>
    game controller
    <button onClick={()=> props.makePlates()}>make plates</button>
    <button onClick={()=> props.trexEat()}>animate Trex1</button>
    <button onClick={()=> props.trexEat2()}>animate Trex2</button>
    <h1>Score: {props.score}, Chances left: {props.chances}</h1>
    </>
  )
}

export default GameController
