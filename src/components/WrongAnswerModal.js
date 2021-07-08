import '../App.js'

const WrongAnswerModal =(props)=> {

  const toggleClass = props.wrongOpen ? 'show' : 'hide'


  return(
    <div className={toggleClass}>
      <div className='modalBackground'>
        <div className='answerFeedback'>
          Wrong Answer!
        </div>
      </div>
    </div>
  )
}

export default WrongAnswerModal
