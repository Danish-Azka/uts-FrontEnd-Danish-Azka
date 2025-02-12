import React, { useState, useEffect } from "react";
import Login from "./Login";

const LogBuyer = () => {
  const [userData, setUserData] = useState({
    idBuyer: localStorage.getItem("idShop") || "",
    namaBuyer: localStorage.getItem("nama") || "",
    emailbuyer: localStorage.getItem("email") || "",
    gambarBuyer: localStorage.getItem("gambar") || "",
  });

  const updateLocalStorage = (user) => {
    localStorage.setItem("idShop", user.id);
    localStorage.setItem("nama", user.nama);
    localStorage.setItem("email", user.email);
    localStorage.setItem("gambar", user.gambarBuye);

    setUserData({
      idShop: user.id,
      nama: user.nama,
      email: user.email,
      gambar: user.gambar,
    });
  };

  return (
    <Login
      apiUrl="http://localhost:3009/shop/get"
      redirectTo="/dashboard"
      greetings="Manage your"
      appName="GearUp"
      userData={userData}
      updateLocalStorage={updateLocalStorage}
    />
  );
};

export default LogBuyer;
