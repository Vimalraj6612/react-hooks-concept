import React, {useCallback, useState} from 'react'
import Age from './screens/Age'
import Person from './screens/person'

/* 
   useCallback => we can pass a function that returns a callback and it will return memorized 
   version of it.

   In react dom which is used to remember a something, it might be a function or variable.
   ex: API calls, animation effects, callback side effects

   useMemo => memorizd special computations
 */

function Ex5() {
  const[age,setAge] =useState(20)

  const incAge = () => {
    setAge(age + 1)
  }

  const updateAge = useCallback(() =>{
    console.log(`callback called`)
    return `Tamil age is ${age} years` 
  }, [])
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <h2 className='text-success text-center'>useCallback</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Age fAge={age} fInc={incAge} />
          <Person fUpdate={updateAge} />
        </div>
      </div>
      
    </div>
  )
}

export default Ex5
