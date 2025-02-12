import React from "react";
import Login from "./Login";

const LogBuyer = () => {
  return (
    <div>
      <Login apiUrl="http://localhost:3009/buyer/get" redirectTo="/cs" greetings='Manage your' appName='Gear'/>
    </div>
  );
};

export default LogBuyer;
