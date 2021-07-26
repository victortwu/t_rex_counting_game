import '../App.css'

const AnswerCard = (props) => {
  const showCard =()=> {
    return(
      <div className='answerBubbleContainer'>
        <div className='answerBubble'>
          {props.displayAnswer}
        </div>
        <div id='answerBubbleTriangle'></div>
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
