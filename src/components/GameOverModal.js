import '../App.css'

const GameOverModal =(props)=> {

const toggleClass = props.gameOverOpen ? 'show' : 'hide'

  return(
    <div className={toggleClass}>
        <div className='modalBackground'>
          <h1 id='gameOverH1'>
          GAME OVER
          </h1>
        </div>
    </div>
  )
}

export default GameOverModal
