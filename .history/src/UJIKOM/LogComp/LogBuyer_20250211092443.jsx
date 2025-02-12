import React from "react";
import Login from "./Login";

const LogBuyer = () => {
  return (
    <div>
      <Login apiUrl="http://localhost:3009/buyer/get" />
    </div>
  );
};

export default LogBuyer;
