import React from 'react'
import '../App.css'

const Trex = React.forwardRef((props, ref) => {
console.log(ref)
  return(
    <div
      ref={ref}
      className='trex'
      style={{
        width: '75%',
        height: '85%',
        backgroundColor: 'green'
      }}
      />
  )
})

export default Trex
