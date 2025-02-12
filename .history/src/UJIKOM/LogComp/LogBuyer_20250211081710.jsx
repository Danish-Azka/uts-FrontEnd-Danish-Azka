import React from "react";
import Login from "./Login";

const Log = () => {
  return (
    <div>
      <Login apiUrl="http://localhost:3009/shop/get" /> {/* Ganti API URL sesuai kebutuhan */}
    </div>
  );
};

export default Log;
