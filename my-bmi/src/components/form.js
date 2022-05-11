import react from 'react'

function Form() {
  return (
    <div>
      <div className="col-sm-4 shadow rounded px-5">
          <h1 className = "text-center pt-3 text-secondaary h2">BMI Calculator</h1>
          
          <form>
              <div className='row'>
                  <div className='col col-sm-6'>
                      <div className='my-3'>
                          <label className='form-label'>weight(kg):</label>
                          <input type="text" className='form-control'/>
                      </div>
                  </div>
              </div>
          </form>
          </div>  
    </div>
  )
}

export default Form