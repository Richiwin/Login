import React, { useState } from 'react'

const Register = (props) => {
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const [ name, setName] = useState('');

    const [register, setRegister] = useState({
      fullName : '', 
      email : '',
      password : '',
    })

    const handleChange = (e) => {
      setRegister({[e.target.id]: e.target.value})
      console.log(e.target.name)
    }
  
  const handleSubmit = (e) => { 
    e.preventDefault();
 
  }
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
     <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="name">full name</label>
      <input value={register.fullName} name="fullName" placeholder="full name" id="fullName" onChange={handleChange} />
        <label htmlFor="email">email</label>
        <input value={register.email}   type="email"placeholder="youremail@gmail.com"  name="email" id="email" onChange={handleChange} />
        <label htmlFor="password">password</label>
        <input value={register.password}  type="password"placeholder="**********"  name="password" id="password" onChange={handleChange} />
         <button type="submit">sign in</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')} >already have an account? login here</button> 
    </div>
  )
}

export default Register;
