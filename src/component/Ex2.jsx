import React, {useEffect, useState} from 'react'

/* useEffect(callback,[state,methods]) =>
  mount === componentDidMount()
    useEffect(function(){}) => infite call = > contine
    useEffect(function(){},[]) => only one time call
      1. to intialize the state
      2. to call methods (api call)

  update === componentDidUpdate() => nP, nS
  useEffect(function(){},[depandancy])

  unmount === componentWillUnMount()
  useEffect(function(){
    return() => {
      //methods, state, props
    }
  }), [])
*/

function Ex2() {
  const [user,setUser] = useState([])

  const getUsers = async() => {
    await fetch(`https://dummyjson.com/users`)
    .then(res => res.json())
    .then(res => {
      console.log(`users =`, res)
      setUser(res.users)
    }).catch(err => console.log(err.message))
  }

  //mount
  useEffect(function(){
      console.log(`useEffect callback message`)
      getUsers()

      return() => {
        console.log(`singing off.. comeback..`)
      }
  }, [])

  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="display-3">useEffect hook</h3>
            </div>
          </div>
          <div className="row">
            {
              user && user.map((item,index) => {
                return(
                  <div className="col-md-6 col-lg-4 col-sm-12 mt-2 mb-2" key={index}>
                    <div className="card">
                      <img src="{item.image}" alt="" className="card-img-top" />
                      <div className="card-body">
                        <h4>{item.firstName} {item.lastName}</h4>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Ex2
