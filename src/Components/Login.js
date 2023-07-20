import React, { useState } from 'react';


const Login = (props) => {
  // const [email, setEmail] = useState('');
  // const [pass, setPass] = useState('');

  const[login, setLogin] = useState({
    email : '',
    password : '',
  })

  const handleChange = (e) => {
    setLogin({[e.target.id]: e.target.value})
    console.log(e.target.name)
  }

const handleSubmit = (e) => { 
  e.preventDefault();
  console.log();
}

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input value={login.email}  type="email"placeholder="youremail@gmail.com" id="email" name="email"  onChange={handleChange}/>
        <label htmlFor="password">password</label>
        <input value={login.password} type="password"placeholder="**********" id="password" name="email" onChange={handleChange} />
         <button type="submit"  >log in</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>already have an account? login here</button>
    </div>
  )
}

export default Login
