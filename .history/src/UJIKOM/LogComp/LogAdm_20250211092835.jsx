import React from "react";
import Login from "./Login";

const LogAdm = () => {
  return (
    <div>
      <Login apiUrl="http://localhost:3009/shop/get" redirectTo="/cs" greetings='Manage your' appName='GearUp'/> 
    </div>
  );
};

export default LogAdm;
