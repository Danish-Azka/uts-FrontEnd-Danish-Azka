import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    : 4000,
    JumlahModal: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    : 3000,
    JumlahModal: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    : 2000,
    JumlahModal: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    : 2780,
    JumlahModal: 3908,
    amt: 2000,
  },
];


const Keuntungan = () => {
    return (
      <div>
        <h2 className="text-center font-semibold text-lg mb-4">Grafik Keuntungan</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="JumlahModal" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="" stroke="#82ca9d" />
            
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  

export default Keuntungan;
