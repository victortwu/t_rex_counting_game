import '../App.js'

const GameController = (props) => {
  return(
    <>
    game controller
    <button onClick={()=> props.makePlates()}>make plates</button>
    </>
  )
}

export default GameController
