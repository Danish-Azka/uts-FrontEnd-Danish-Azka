import Login from "./components/Login";

const lo = () => {
  return (
    <div>
      <Login apiUrl="http://localhost:3009/shop/get" /> {/* Ganti API URL sesuai kebutuhan */}
    </div>
  );
};

export default lo;
