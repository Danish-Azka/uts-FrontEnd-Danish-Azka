import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const BarangTerjual = () => {
  return (
    <div>
      <h2 className="text-center font-semibold text-lg mb-4">Barang Terjual</h2>
      <ResponsiveContainer className='w-full h-'>
        <PieChart>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarangTerjual;
