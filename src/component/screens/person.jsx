import React from 'react'

function person(props) {
  return (
    <div className='row'>
      <div className="col-md-12">
        <h1 className='text-danger'>{props.fUpdate()}</h1>
      </div>
    </div>
  )
}

export default person
