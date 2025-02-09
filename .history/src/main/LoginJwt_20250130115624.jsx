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
    setError('')
  }
  return (
    <div>LoginJwt</div>
  )
}

export default LoginJwt