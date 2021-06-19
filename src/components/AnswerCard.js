import '../App.css'

const AnswerCard = (props) => {
  return(
    <>
    <div className='answerBubble'>
      {props.answer}
    </div>
    </>
  )
}

export default AnswerCard
