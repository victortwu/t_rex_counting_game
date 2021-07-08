import '../App.css'

const NextLevelModal =(props)=> {

  const toggleClass = props.nextLevelOpen ? 'show' : 'hide'

  return(
    <div className={toggleClass}>
      <div className='nextLevelModalContainer'>
        <div className='nextLevel'>
          <div>YOU GOT TO THE NEXT LEVEL!</div>
        </div>
      </div>
    </div>
  )
}

export default NextLevelModal
