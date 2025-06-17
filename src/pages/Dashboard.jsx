import React from 'react';

function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-yellow-900">Dashboard</h1>
      <p className="text-gray-700 mb-6">
        Đây là bảng điều khiển tổng quan. Tại đây bạn sẽ thấy các thông tin như ngân sách, chi tiêu và thống kê cá nhân. 
        Nội dung cụ thể sẽ được hiển thị sau khi bạn hoàn thành tích hợp dữ liệu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold text-amber-600">Ngân sách</h2>
          <p className="text-gray-500 mt-2">Đang cập nhật...</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold text-amber-600">Chi tiêu</h2>
          <p className="text-gray-500 mt-2">Đang cập nhật...</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold text-amber-600">Thống kê</h2>
          <p className="text-gray-500 mt-2">Đang cập nhật...</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
