import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginJwt = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post("http://localhost:3009/admin/login", { email, password });

      // Cek apakah token ada dalam response
      console.log("Response dari server:", response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/d"); // Ganti dengan halaman yang sesuai
      } else {
        setError("Token tidak ditemukan dalam response.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Login gagal");
    }
  };

  return (
    <>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          placeholder="Isi email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
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
