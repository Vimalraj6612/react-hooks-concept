import React from 'react'

function Marks(props) {
  return (
    <div className='row'>
        <div className="col-md-12">
            <h1> marks = { props.fmarks} </h1>
            <button className='btn btn-primary' onClick={() => props.add(5)}>Add + 5</button>
        </div>
      
    </div>
  )
}

export default Marks
