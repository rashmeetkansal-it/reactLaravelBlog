import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

function SignUp() {
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push("/dashboard")
    }
  }, [])
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  async function register() {
    let item = { name, email, password }
    console.warn(item)
    let result = await fetch("http://127.0.0.1:8000/api/signup", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-type": 'application/json',
        "Accept": 'application/json'
      }
    })
    result = await result.json();
    //localStorage.setItem("user-info", JSON.stringify(result))
    history.push("/myaccount")

  }


  return (
    <div className="login-wrapper">

      <h2>Signup</h2>
      <form>
        <label>
          <p>Name</p>
          <input type="text" placeholder="Name" className="form-control" onChange={e => setName(e.target.value)} />
        </label>
        <label>
          <p>Email</p>
          <input type="text" className="form-control"  placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" className="form-control"  placeholder="Password"   onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="button" className="btn btn-primary" onClick={register}  >Submit</button>
        </div>
      </form>
    </div>

  )
}
export default SignUp;
