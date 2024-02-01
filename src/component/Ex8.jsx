import React,{useReducer} from 'react'

/* this hook is an alternative to useState, when you have completex state logic.
    It takes reducer function and an intial state or data, and returns the current state
    dispatch function to update it 
*/

// const [state, dispatcher] = useReducer(reducer, initialData)

// dispathcer(action type) => to change your state, you dispatch action to the dispatch function.
// reducer => is a function that describe how uour state can change based on different actions 
function customReducer(state,action) {
  switch(action) {
    case "inc":
      return {qnty : state.qnty + 1}
      break;
    case "dec":
      return state.qnty <= 1 ? {qnty : 1} : {qnty: state.qnty - 1}
      break;
    case "clear":
      return {qnty:1}
      break;
    default: console.log(`input`)
  }
}

function Ex8() {
  let initState = {qnty: 1}
  const [state,dispatch] = useReducer(customReducer, initState)
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="display-3 text-primary">useReducer</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 tet-center">
          <h1 className="display-3 text-success d-flex justify-content-evenly">
            <button onClick={() => dispatch('inc')} className='btn btn-success'>Inc</button>
               {state.qnty}
            <button onClick={()=> dispatch('dec')} className='btn btn-danger'>Dec</button>
          </h1>
          <button onClick={() => dispatch('clear')} className='btn btn-warning'>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Ex8
