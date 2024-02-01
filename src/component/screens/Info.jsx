import React from 'react'

function Info(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
            <h1>{props.txt.result}</h1>
        </div>
      </div>
    </div>
  )
}

export default Info
