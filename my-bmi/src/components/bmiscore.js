import react from 'react'

function Bmi({bmiNo,bmiName}) {
/*   console.log(props);
  const {bmiNo,bmiName}= props; */
  return (
    <div>
        bmi score{bmiNo}<br/>
        Bmi Type{bmiName}
    </div>
  )
}

export default Bmi