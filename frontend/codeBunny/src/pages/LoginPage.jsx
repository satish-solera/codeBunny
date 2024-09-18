import React, { useState } from 'react'

function LoginPage() {
  const [error , setError] = useState('hey this an error')
  const  abc = () =>{
    console.log('abc is ')
  }
  return (
    <>
    <div className="signup ">
        <form action="" className="signup flex-col text-center gap-3 ">
          <div className="">
            <h1>Login</h1>
            <h1 onChange={() => setError("fill all fiedls")}>{error}</h1>
            <div className="mt-6 ">
              <span className="px-4 w-10 h-4 bg-red-500 ">Email</span>
              <div className="mt-2 ">
                <input
                  type="text"
                  placeholder=" enter your email "
                  className="w-[20rem] border  border-2-black"
                  name="email"
                  // // value={email}
                  onChange={abc}
                />
              </div>
            </div>

            <div className="">
              
              

              <div className="">
                <span className="mx-2 w-10 h-4 mt-2 bg-red-500">Password</span>
                <div className="mt-2 ">
                  <input
                    type="password"
                    placeholder=" enter your password "
                    className="w-[20rem] border  border-2-black"
                    name="password"
                  //   value={password}
                  // onChange={abc}
                  />
                </div>

                

                  <button className="bg-blue-400 w-[5rem] mt-5" onClick={abc()}>
                    submit
                  </button>
                </div>
              </div>
            </div>
          
        </form>
      </div>
    </>
  )
}

export default LoginPage