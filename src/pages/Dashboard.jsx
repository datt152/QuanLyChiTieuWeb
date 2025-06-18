import React from 'react';
import { FaPiggyBank, FaWallet, FaCoins, FaClipboardList } from 'react-icons/fa';
import avatar from '../assets/avatar.jpg';

function Dashboard() {
  return (
    <div className="p-8 bg-gradient-to-tr from-white to-slate-50 min-h-screen">
      {/* Header + Assistant */}
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-4xl font-bold text-gray-800">🎯 Dashboard</h1>
        <div className="bg-white p-4 rounded-2xl shadow-lg max-w-xs flex items-start space-x-3 border border-yellow-200 
          transform transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-yellow-50">
          <img src={avatar} alt="Chibi" className="w-12 h-12 rounded-full object-cover border border-yellow-400" />
          <div>
            <p className="text-sm font-medium text-gray-700">👋 Xin chào!</p>
            <p className="text-gray-600 text-sm">
              Hôm nay bạn nên chi không quá <strong className="text-red-500">45.000₫</strong> nha~
            </p>
          </div>
        </div>
      </div>

      {/* Mục tiêu tiết kiệm */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border-l-4 border-blue-500 
        transform transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-blue-50">
        <h2 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
          <FaPiggyBank className="text-blue-500" /> Mục tiêu tiết kiệm: Mua Laptop
        </h2>
        <p className="text-gray-700">Cần tiết kiệm: <strong>15.000.000₫</strong></p>
        <p className="text-gray-700">Đã tiết kiệm: <strong>5.000.000₫</strong> (33.33%)</p>
        <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
          <div className="bg-blue-500 h-3 rounded-full transition-all duration-500 ease-in-out" style={{ width: '33.33%' }}></div>
        </div>
      </div>

      {/* Thống kê kỳ này */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<FaWallet />} label="Tổng số tiền kỳ này" value="15.000.000₫" color="green" />
        <StatCard icon={<FaClipboardList />} label="Muốn xài trong kỳ" value="10.000.000₫" color="amber" />
        <StatCard icon={<FaCoins />} label="Đã xài trong kỳ" value="2.300.000₫" color="red" />
        <StatCard icon={<FaPiggyBank />} label="Đã tiết kiệm" value="5.000.000₫" color="purple" />
      </div>

      {/* Chi tiêu hôm nay */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-200 
        transform transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-red-50">
        <h2 className="text-xl font-semibold text-amber-700 mb-2">📅 Chi tiêu hôm nay</h2>
        <p className="text-gray-700">Hạn mức: <strong>45.000₫</strong></p>
        <p className="text-gray-700">Đã chi: <strong>55.000₫</strong></p>
        <p className="text-red-500 mt-2">⚠️ Vượt giới hạn 10.000₫ — sẽ điều chỉnh xuống 35.000₫ ngày mai.</p>
      </div>
    </div>
  );
}

// StatCard component
function StatCard({ icon, label, value, color }) {
  const colorMap = {
    green: 'text-green-600',
    red: 'text-red-600',
    amber: 'text-amber-600',
    purple: 'text-purple-600',
  };

  const bgHoverMap = {
    green: 'hover:bg-green-50',
    red: 'hover:bg-red-50',
    amber: 'hover:bg-amber-50',
    purple: 'hover:bg-purple-50',
  };

  return (
    <div className={`bg-white p-6 rounded-2xl shadow-md border border-slate-100 
      transform transition duration-300 hover:scale-[1.05] hover:shadow-xl ${bgHoverMap[color]}`}>
      <div className="flex items-center justify-center text-2xl mb-3">{icon}</div>
      <h3 className={`text-md font-semibold text-center ${colorMap[color]}`}>{label}</h3>
      <p className="text-xl text-gray-800 mt-1 text-center">{value}</p>
    </div>
  );
}

export default Dashboard;
