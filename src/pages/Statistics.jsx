import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const allSpendingData = [
  { period: 'Kỳ 1', spent: 7000000, categories: { 'Ăn uống': 4000000, 'Tiền nhà': 1000000, 'Tiền học': 800000, 'Hẹn hò': 800000, 'Tiền điện': 400000 } },
  { period: 'Kỳ 2', spent: 11000000, categories: { 'Ăn uống': 5000000, 'Tiền nhà': 2000000, 'Tiền học': 1000000, 'Hẹn hò': 1800000, 'Tiền điện': 1000000 } },
  { period: 'Kỳ 3', spent: 8500000, categories: { 'Ăn uống': 3000000, 'Tiền nhà': 2000000, 'Tiền học': 1500000, 'Hẹn hò': 1000000, 'Tiền điện': 1000000 } },
  { period: 'Kỳ 4', spent: 12000000, categories: { 'Ăn uống': 6000000, 'Tiền nhà': 2000000, 'Tiền học': 2000000, 'Hẹn hò': 1200000, 'Tiền điện': 1000000 } },
  { period: 'Kỳ 5', spent: 7000000, categories: { 'Ăn uống': 4000000, 'Tiền nhà': 1000000, 'Tiền học': 800000, 'Hẹn hò': 800000, 'Tiền điện': 400000 } },
  { period: 'Kỳ 6', spent: 11000000, categories: { 'Ăn uống': 5000000, 'Tiền nhà': 2000000, 'Tiền học': 1000000, 'Hẹn hò': 1800000, 'Tiền điện': 1000000 } },
  { period: 'Kỳ 7', spent: 8500000, categories: { 'Ăn uống': 3000000, 'Tiền nhà': 2000000, 'Tiền học': 1500000, 'Hẹn hò': 1000000, 'Tiền điện': 1000000 } },
  { period: 'Kỳ 8', spent: 12000000, categories: { 'Ăn uống': 6000000, 'Tiền nhà': 2000000, 'Tiền học': 2000000, 'Hẹn hò': 1200000, 'Tiền điện': 1000000 } },
];

const COLORS = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF6666'];

function Statistics() {
  const pageSize = 5;
  const [selectedIndex, setSelectedIndex] = useState(allSpendingData.length - 1);
  const [currentPage, setCurrentPage] = useState(Math.floor((allSpendingData.length - 1) / pageSize));

  const startIndex = currentPage * pageSize;
  const displayedData = allSpendingData.slice(startIndex, startIndex + pageSize);
  const selectedData = allSpendingData[selectedIndex];

  const categoryData = Object.entries(selectedData.categories).map(([name, value]) => ({ name, value }));
  const totalSpent = categoryData.reduce((sum, item) => sum + item.value, 0);

  const wittyAdvice = (
    <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl text-yellow-800 shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">🧠 Lời khuyên từ Chibi</h2>
      <p>"{selectedData.period} bạn đã xài khá nhiều cho việc ăn uống 🍔! Hãy healthy hơn và thử nấu ăn tại nhà nhé 🥗."</p>
    </div>
  );

  return (
    <div className="p-8 bg-gradient-to-br from-white to-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">📈 Thống kê chi tiêu giữa các kỳ</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-10 hover:shadow-lg transition">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">💸 So sánh chi tiêu các kỳ</h2>
          <div className="flex space-x-2">
            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 0))} disabled={currentPage === 0} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">⬅️</button>
            <button onClick={() => setCurrentPage(p => (startIndex + pageSize < allSpendingData.length ? p + 1 : p))} disabled={startIndex + pageSize >= allSpendingData.length} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">➡️</button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={displayedData}>
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip formatter={(value) => new Intl.NumberFormat().format(value) + '₫'} />
            <Bar
              dataKey="spent"
              radius={[5, 5, 0, 0]}
              onClick={(_, index) => setSelectedIndex(allSpendingData.indexOf(displayedData[index]))}
            >
              {displayedData.map((entry, index) => {
                const isActive = allSpendingData.indexOf(entry) === selectedIndex;
                return (
                  <Cell key={`cell-${index}`} fill={isActive ? '#FF8042' : '#8884d8'} />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">📊 Tỉ lệ chi tiêu theo danh mục ({selectedData.period})</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={(entry) => `${entry.name} (${((entry.value / totalSpent) * 100).toFixed(1)}%)`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition mb-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">📂 Chi tiết từng danh mục ({selectedData.period})</h2>
            <ul className="space-y-2">
              {categoryData.map((item) => (
                <li key={item.name} className="flex justify-between text-gray-700">
                  <span>{item.name}</span>
                  <span>{((item.value / totalSpent) * 100).toFixed(1)}% - {item.value.toLocaleString()}₫</span>
                </li>
              ))}
            </ul>
          </div>
          {wittyAdvice}
        </div>
      </div>
    </div>
  );
}

export default Statistics;