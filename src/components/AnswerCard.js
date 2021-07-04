import '../App.css'

const AnswerCard = (props) => {

  return(
    <>
    <div className='answerBubble'>
      {props.displayAnswer}
    </div>
    </>
  )
}

export default AnswerCard
