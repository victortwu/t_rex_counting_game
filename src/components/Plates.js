import '../App.css'

const Plates = (props) => {
  console.log(props.plates)

  return(
      <>
      {
        props.plates.map(plate=> {
          return(
            <div key={plate.value} className={plate.className}>{plate.value}</div>
          )
        })
      }
      </>
  )
}

export default Plates
