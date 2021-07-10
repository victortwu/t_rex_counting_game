import '../App.js'

const WrongAnswerModal =(props)=> {

  const randomMessages = ['Sorry!', 'Try again!', 'Not quite!']

  const getRandomMessage =()=> {
    const index = Math.floor(Math.random() * randomMessages.length)
    return randomMessages[index]
  }

  const toggleClass = (props.wrongOpen && !props.gameOverOpen) ? 'show' : 'hide'


  return(
    <div className={toggleClass}>
      <div className='modalBackground'>
        <div className='wrongAnswerFeedback'>
          <span id='wrongAnswerSpan'>
            {
              (props.chances === 1) ? 'One chance left!!'
              : getRandomMessage()
            }
          </span>
          <span id='xSpan'>
            {
              (props.chances === 1) ? ''
              : 'X'
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default WrongAnswerModal
