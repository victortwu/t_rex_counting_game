import React from 'react'
import '../App.css'

const Trex = React.forwardRef((props, ref) => {

  return(
    <div ref={ref} className='trex'/>
  )
})

export default Trex
