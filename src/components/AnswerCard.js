import '../App.css'

const AnswerCard = (props) => {
  const showCard =()=> {
    return(
      <div className='answerBubble'>
        {props.displayAnswer}
      </div>
    )
  }
  return(
    <>
      {showCard()}
    </>
  )
}

export default AnswerCard
