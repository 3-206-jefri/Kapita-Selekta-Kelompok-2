import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts';

const BarChart = ({ preTestPercent, postTestPercent }) => {
  // Data sekarang menggunakan nilai Persen (0-100)
  const data = [
    {
      name: 'Pre-Test',
      nilai: parseFloat(preTestPercent.toFixed(1)), // Pembulatan 1 desimal
      fill: '#c90c7a', // Warna Pink
    },
    {
      name: 'Post-Test',
      nilai: parseFloat(postTestPercent.toFixed(1)), // Pembulatan 1 desimal
      fill: '#005da5', // Warna Biru
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#333' }}>{label}</p>
          <p style={{ margin: '0', color: payload[0].fill, fontWeight: '600' }}>
            Capaian: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: 300, marginTop: '1rem' }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          
          <XAxis 
            dataKey="name" 
            scale="point" 
            padding={{ left: 50, right: 50 }} 
            tick={{ fill: '#666', fontSize: 12, fontWeight: 600 }}
            axisLine={false}
            tickLine={false}
          />
          
          {/* Sumbu Y diset domain 0 sampai 100 */}
          <YAxis 
            domain={[0, 100]} 
            tick={{ fill: '#666', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            unit="%" // Menambah simbol % di angka sumbu Y
          />

          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
          
          <Bar 
            dataKey="nilai" 
            barSize={60} 
            radius={[8, 8, 0, 0]}
            animationDuration={1500}
          >
             <LabelList 
                dataKey="nilai" 
                position="top" 
                fill="#666" 
                fontSize={12} 
                fontWeight="bold" 
                formatter={(val) => `${val}%`} // Menambah % di label atas batang
             />
          </Bar>

          <Line 
            type="monotone" 
            dataKey="nilai" 
            stroke="#ff9800" 
            strokeWidth={3} 
            dot={{ r: 6, fill: "#ff9800", strokeWidth: 2, stroke: "#fff" }} 
            activeDot={{ r: 8 }}
          />
          
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;