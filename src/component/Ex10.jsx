import React, {useState,useRef,useImperativeHandle} from 'react'
import CountingBox from './screens/CountBox'

//the useImperactiveHandel hook -> lets you create a handle or custom name for a value exposed to 
//a parrent component using ref keyword.
// the forwardRef = > is used to forward a ref attribut from the one parent componet to it's child component


// const CountingBox = React.forwardRef((props,ref) => {
//     const[text,setText] = useState('')
//   })

function Ex10() {
    const [wordCount,setWordCount] = useState(0)
        //the useRef hook retrun a ref object with a mutable property named "current"
    const txtRef = useRef()
    // //function count the words
    // const countWords = () => {
    //   const txt = txtRef.current.value;
    //   setWordCount(txt.split(' ').length)
    // }
    const countWords = (count) => {
        setWordCount(count)
    }

    
  return (
    <div className='container'>
    <div className="row">
      <div className="col-md-12 text-center">
        <h3 className="text-success display-3">useImperativeHandle</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">

            <CountingBox ref={txtRef}/>

            {/* <div className="form-group mt-2 mb-2">
              <label htmlFor="txt">Enter Your Words</label>
              <textarea name="txt" id="txt" ref={txtRef} cols="30" rows="6" className='form-control' required></textarea>
            </div> */}
            <div className="from-group mt-2 mb-2">
              <button onClick={() => countWords(txtRef.current.count)} className='btn btn-success'>Count Words</button>
            </div>
          </div>
          <div className="card-footer">
            <h1 className="text-center text-success">
                Current word count = {wordCount}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Ex10
