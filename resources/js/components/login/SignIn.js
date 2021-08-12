import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom'

export default function SignIn() {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push("/dashboard")
    }
    else
      history.push("/myaccount")
  }, [])


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function loginIn() {
    let item = { email, password }
    console.warn(item)
    let result =await fetch("http://127.0.0.1:8000/api/login", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-type": 'application/json',
        "Accept": 'application/json'
      }
    })
    //console.log(result.data);
    result =await result.json();
   
    localStorage.setItem("user-info", JSON.stringify(result))
     history.push("/dashboard")

  }

  return (
    <div className="login-wrapper">
      <div>
        <h2>Log In</h2>
        <form>
          <label>
            <p>Username</p>
            <input type="text" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="button" className="btn btn-primary" onClick={loginIn}   >Submit</button>
          </div>
        </form>
        <div>
          <Link className='navbar-brand' to='/signup'>Register</Link>
        </div>
      </div>

    </div>
  )
}
