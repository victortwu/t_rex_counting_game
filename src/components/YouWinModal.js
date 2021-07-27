import React from 'react'

const YouWinModal = (props) => {

const toggleClass = props.youWinOpen ? 'show' : 'hide'

  return(
    <div className={toggleClass}>
      <div className='youWinModalBackground'>
        <div className='youWinContainer'>
          <h1>YOU WIN!</h1>
        </div>
      </div>
    </div>
  )
}

export default YouWinModal
