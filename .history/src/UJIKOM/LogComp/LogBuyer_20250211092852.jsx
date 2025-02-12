import React from "react";
import Login from "./Login";

const LogBuyer = () => {
  return (
    <div>
      <Login apiUrl="http://localhost:3009/buyer/get" redirectTo="/cs" greetings='Wel' appName='GearUp'/>
    </div>
  );
};

export default LogBuyer;
