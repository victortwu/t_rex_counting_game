import '../App.js'

const GameController = (props) => {



  return(
    <>

    <button onClick={()=> props.play()}>PLAY</button>
    <table>
      <tbody>
        <tr><td>Score:</td></tr>
        <tr><td id='scoreCell'>{props.score}</td></tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr><td>Chances Left:</td></tr>
        <tr><td id='chancesCell'>{props.chances}</td></tr>
      </tbody>
    </table>

    </>
  )
}

export default GameController
