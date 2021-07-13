import '../App.css'

const CorrectModal =(props)=> {

  const randomMessages = ['Good Job!', 'Correct!', 'Awesome!', 'So smart!']

  const getRandomMessage =()=> {
    const index = Math.floor(Math.random() * randomMessages.length)
    return randomMessages[index]
  }

  const toggleClass = props.correctOpen ? 'show' : 'hide'


  return(


    <div className={toggleClass}>
      <div className='modalContainerNoBackground'>
        <div className='answerFeedback'>
        <span id='correctMessage'>
        {
          (props.nextLevelMessage) ? 'YOU GOT TO THE NEXT LEVEL!!'
          : getRandomMessage()
        }
        </span>
        <span id='bonesEarned'>You earned {props.answer} bones!</span>
        </div>
      </div>
    </div>


  )
}

export default CorrectModal
