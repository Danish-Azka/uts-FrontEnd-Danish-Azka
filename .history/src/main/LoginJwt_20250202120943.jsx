import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginJwt = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post("http://localhost:3009/admin/login", { userName, password });
      localStorage.setItem("token", response.data.token);
      navigate("/mam");
    } catch (error) {
      setError(error.response?.data?.message || "Login gagal");
    }
  };

  return (
    <>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Isi Username"
          value={em}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Isi Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Login Dong Mass</button>
      </form>
    </>
  );
};

export default LoginJwt;
