import '../App.css'

const AnswerCard = (props) => {
console.log(props.answer)
console.log(props.displayAnswer)
  return(
    <>
    <div className='answerBubble'>
      {props.displayAnswer}
    </div>
    </>
  )
}

export default AnswerCard
