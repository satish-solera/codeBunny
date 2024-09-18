import React, { useState } from "react";

function SignupPage() {
  const [error, setError] = useState("error is big");
  const [email , setEmail] = useState('');
  const [userName , setUserName] = useState('');
  const [password , setPassword] = useState('');

  const abc = (e) => {
   
    console.log(e)
    
  };

  return (
    <>

      <div className="signup ">
        <form action="" className="signup flex-col text-center gap-3 ">
          <div className="">
            <h1>Signup</h1>
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
              <span className="mx-2 w-10 h-4 mt-2 bg-red-500">Username</span>
              <div className="mt-2 ">
                <input
                  type="text"
                  placeholder=" enter your username "
                  className="w-[20rem] border  border-2-black"
                  name="userName"
                  // // value={userName}
                  // onChange={abc}
                />
              </div>

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
  );
}

export default SignupPage;
