import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginJwt = () => {
  
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    try{
        const response = await axios.post("")
        localStorage.setItem("token", response.data.token);
        navigate("/mam")
    }catch (error){
      setError(error.response?.data?.message || "login ggal")
    }
  }
  return (
    <>
      <h2>Login</h2>

      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onsubmit={handleSubmit}>

<label htmlFor="">Username</label>

<input type="text" placeholder="Isi Username" value={username=> setUsername(e.target.value)} required/>
<label htmlFor="">Password</label>
<input type="password" placeholder="Isi Password" value={password
{(e)> setPassword(e.target.value)} required/>

コ

<button type="submit">Login Dong Mass</button>

4

</form>





    </>
  )
}

export default LoginJwt