import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-100 to-yellow-400 p-6 text-center">
      <h1 className="text-5xl font-bold text-yellow-900 mb-4">404</h1>
      <p className="text-xl text-yellow-800 mb-6">Ôi không! Trang bạn tìm kiếm không tồn tại.</p>
      <Link to="/" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold transition duration-200">
        Quay lại trang chủ
      </Link>
    </div>
  );
}

export default PageNotFound;