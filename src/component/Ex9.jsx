import React,{useState, useRef} from 'react'
/* 
Hooks
1. State Hooks -> useState, useReducer
2. Refernce Hooks -> useRef
3. Effect Hooks -> useEffect, useLayoutEffect
4. performance Hooks -> useCallback, useMemo
5. Context Hook -> useContext
*/


function Ex9(props) {
  const [wordCount,setWordCount] = useState(0)
//the useRef hook return a ref object with a mutable property named "current"
  const txtRef = useRef()
  //function count the words
  const countWords = () => {
    const txt = txtRef.current.value;
    setWordCount(txt.split(' ').length)
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
              <div className="form-group mt-2 mb-2">
                <label htmlFor="txt">Enter Your Words</label>
                <textarea name="txt" id="txt" ref={txtRef} cols="30" rows="6" className='form-control' required></textarea>
              </div>
              <div className="from-group mt-2 mb-2">
                <button onClick={countWords} className='btn btn-success'>Count Words</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ex9
