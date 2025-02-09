import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 7000 },
  { name: "May", sales: 2000 },
  { name: "May", sales: 6000 },
  { name: "May", sales: 6000 },
  { name: "May", sales: 6000 },
  { name: "May", sales: 6000 },
  { name: "May", sales: 6000 },
  { name: "May", sales: 6000 },
  { name: "May", sales: 6000 },
];

const Keuntungan = () => {
  return (
    <div className="w-fit">
      <h2 className="text-xl font-semibold text-center mb-4">Monthly Sales Data</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#8884d8" name="Sales" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Keuntungan;