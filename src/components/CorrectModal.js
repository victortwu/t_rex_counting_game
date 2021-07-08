import '../App.css'

const CorrectModal =(props)=> {

  const toggleClass = props.correctOpen ? 'show' : 'hide'


  return(
    <div className={toggleClass}>
      <div className='modalContainerNoBackground'>
        <div className='answerFeedback'>
        Correct!
        </div>
      </div>
    </div>
  )
}

export default CorrectModal
