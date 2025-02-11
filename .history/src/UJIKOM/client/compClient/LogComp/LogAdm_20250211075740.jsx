import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Login apiUrl="http://localhost:3009/shop/get" /> {/* Ganti API URL sesuai kebutuhan */}
    </div>
  );
};

export default App;
