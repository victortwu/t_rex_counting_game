import '../App.js'

const GameController = (props) => {
console.log('At GameController: ', props.plates)
  return(
    <>
    game controller
    <button onClick={()=> props.makePlates()}>make plates</button>
    </>
  )
}

export default GameController
