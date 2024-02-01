import React, { useState, useMemo } from 'react'
import Marks from './screens/Marks'
import Info from './screens/Info'

/* useMemo will only recompute the memoized value when one of the deps has changed. */

function Ex7() {
  const [marks,setMarks] = useState(30)

  const addMarks = (val) => {
    setMarks(marks + val)
  }

  const richyMarks = useMemo(() =>({
    result: `Richy has scored ${marks} marks in science...`
  }),[marks])
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="dispaly-3 test-center">useMemo</h3>
        </div>
      </div>
        <Marks fmarks={marks} add={addMarks}/>
        <Info txt={richyMarks}/>
    </div>
  )
}

export default Ex7
