import React, { useState } from 'react'

const LoginForm = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userName=" + userName, "password=" + password);
  }
  return (
    <div className='loginForm'>
      <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-4">
                <form onSubmit={handleSubmit}>
                    <h2 className="mb-4">Login</h2>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter your username" value={userName} required onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Login</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default LoginForm