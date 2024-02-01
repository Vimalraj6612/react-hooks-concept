import React, {useState} from 'react'

function Ex1() {
    //const [state,handler] = useState(init value)

    const [num,setNum] = useState(0)

    const addVal = (val) => {
        setNum(num + val)
    }
  return (
    <div>
      <div className="containerr">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="text-success">useState Hook</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12 text-center">
                <h1 className="display-1 text-danger">Num = {num}</h1>
                <button onClick={() => setNum(num + 1)} className='btn btn-info'>Add + 1</button>

                <hr/>
                <button onClick={() => setNum(num+10)} className="btn btn-success">Add + 10</button>
                <button onClick={() => setNum(num +20)} className="btn btn-warning">Add + 20</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Ex1
