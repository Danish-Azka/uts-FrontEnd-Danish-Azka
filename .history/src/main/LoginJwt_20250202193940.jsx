import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginJwt = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Kirim email & password ke backend untuk login
      const response = await axios.post("http://localhost:3009/admin/login", { email, password });

      const token = response.data.accessToken;
      localStorage.setItem("token", token);
      console.log("Token:", token);

      navigate("/display");

    } catch (error) {
      setError(error.response?.data?.message || "Login gagal");
    }
  };

  return (
    <>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Isi email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
