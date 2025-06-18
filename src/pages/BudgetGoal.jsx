import React, { useState } from 'react';

function BudgetGoal() {
  const [totalMoney, setTotalMoney] = useState('');
  const [extraMoney, setExtraMoney] = useState('');
  const [wantToSpend, setWantToSpend] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const getDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = (end - start) / (1000 * 3600 * 24);
    return diff > 0 ? diff + 1 : 0;
  };

  const days = getDays();
  const totalAvailable = Number(totalMoney) + Number(extraMoney || 0);
  const dailySpending = wantToSpend && days ? (wantToSpend / days).toFixed(0) : 0;
  const savedMoney = totalAvailable && wantToSpend
    ? (totalAvailable - wantToSpend).toFixed(0)
    : 0;

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-white to-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">📊 Thiết lập ngân sách kỳ này</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <InputBlock
          label="💰 Tổng số tiền ban đầu"
          value={totalMoney}
          onChange={(e) => setTotalMoney(Number(e.target.value))}
          placeholder="VD: 15.000.000"
        />
        <InputBlock
          label="➕ Tiền thêm trong kỳ"
          value={extraMoney}
          onChange={(e) => setExtraMoney(Number(e.target.value))}
          placeholder="VD: 1.000.000 (nếu có)"
        />
        <InputBlock
          label="🎯 Tổng số tiền muốn chi tiêu"
          value={wantToSpend}
          onChange={(e) => setWantToSpend(Number(e.target.value))}
          placeholder="VD: 10.000.000"
        />
        <InputBlockGroup>
          <InputBlock
            label="📅 Ngày bắt đầu kỳ"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <InputBlock
            label="📅 Ngày kết thúc kỳ"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </InputBlockGroup>
      </div>

      {/* Nút Thiết lập */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 hover:scale-105 transition"
        >
          Thiết Lập
        </button>
      </div>

      {/* Kết quả */}
      {submitted && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <ResultCard
            label="💸 Bạn nên chi mỗi ngày"
            value={`${Number(dailySpending).toLocaleString()}₫`}
            color="amber"
          />
          <ResultCard
            label="💎 Tiền bạn có thể tiết kiệm"
            value={`${Number(savedMoney).toLocaleString()}₫`}
            color="green"
          />
        </div>
      )}
    </div>
  );
}

function InputBlock({ label, type = 'number', value, onChange, placeholder }) {
  return (
    <div className="flex flex-col bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <label className="text-gray-700 font-semibold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

// Gộp nhóm ngày bắt đầu và kết thúc
function InputBlockGroup({ children }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </div>
  );
}

function ResultCard({ label, value, color }) {
  const colorMap = {
    green: 'text-green-600 bg-green-50 border-green-200',
    amber: 'text-amber-600 bg-amber-50 border-amber-200',
  };

  return (
    <div
      className={`p-6 rounded-xl border shadow-sm hover:shadow-xl transition transform hover:scale-[1.03] 
      ${colorMap[color]}`}
    >
      <h2 className="text-lg font-semibold mb-2">{label}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

export default BudgetGoal;
