import '../App.css'

const Plates = (props) => {
  console.log(props.plates)

  const appendDrumsticks = (len) => {
    let drumSticks = []

    console.log('Heres len: ', len)
    for (let i = 0; i < len; i++) {
      drumSticks.push(<div className='drumStick'></div>)
    }
    return drumSticks
  }

  const plates = props.plates.map(plate=> {

    return(
      <div key={plate.value} className={plate.className}>{appendDrumsticks(plate.value)}{plate.value}</div>

    )
  })


  return(
      <>
      {
      plates
      }
      </>
  )
}

export default Plates
