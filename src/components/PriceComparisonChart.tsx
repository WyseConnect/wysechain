
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const PriceComparisonChart = () => {
  // Data for Bitcoin and WYSE token from 2025 to 2030
  const data = [
    { year: '2025', bitcoin: 80000, wyse: 0.0001 },
    { year: '2026', bitcoin: 120000, wyse: 0.001 },
    { year: '2027', bitcoin: 180000, wyse: 0.01 },
    { year: '2028', bitcoin: 250000, wyse: 0.1 },
    { year: '2029', bitcoin: 400000, wyse: 1 },
    { year: '2030', bitcoin: 650000, wyse: 10 }
  ];

  return (
    <div className="w-full bg-wyse-dark/50 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4 text-white">Bitcoin vs WYSE Token Growth (2025-2030)</h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis 
              dataKey="year" 
              stroke="#ddd" 
            />
            <YAxis 
              yAxisId="left"
              stroke="#F7931A" 
              domain={[0, 'dataMax']} 
              tickFormatter={(value) => `$${value.toLocaleString()}`} 
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="#7CD6F8"
              domain={[0.0001, 10]} 
              scale="log"
              tickFormatter={(value) => `$${value}`} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1A1F2C', border: '1px solid #444', borderRadius: '4px' }}
              labelStyle={{ color: '#ddd' }}
              formatter={(value, name) => {
                if (name === 'bitcoin') {
                  return [`$${(value as number).toLocaleString()}`, 'Bitcoin'];
                } else {
                  return [`$${(value as number).toLocaleString()}`, 'WYSE Token'];
                }
              }}
            />
            <Legend wrapperStyle={{ color: '#ddd' }} />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="bitcoin" 
              name="Bitcoin" 
              stroke="#F7931A" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              activeDot={{ r: 8 }} 
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="wyse" 
              name="WYSE Token" 
              stroke="#7CD6F8" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center">
        <p className="text-wyse-lightblue text-sm">
          Starting at $0.0001 SOL per WYSE, our projected growth compared to Bitcoin (logarithmic scale)
        </p>
      </div>
    </div>
  );
};

export default PriceComparisonChart;
