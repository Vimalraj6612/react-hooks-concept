import React ,{useImperativeHandle, useState}from 'react'

const CountingBox = React.forwardRef((props,ref) =>{
    const[inp,setInp] = useState('')

    //useImpratveHandler(ref, handler,[dep])
    useImperativeHandle(ref,() => {
        return {count: inp.split(' ').length}
    },[inp])
    


  return (
    <div className='from-group mt-2 mb-2'>
        <label htmlFor="txt">Enter Your Words</label>
        <textarea name="txt" id="txt" value={inp} onChange={(e) => setInp(e.target.value)}cols="30" rows="10" className='form-control' required></textarea>
      
    </div>
)}

)

export default CountingBox
