import React from 'react';
import pig from '../assets/pigcoin.png'; 

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 to-yellow-400 p-4">
      <div className="bg-white rounded-2xl shadow-xl flex w-full max-w-4xl overflow-hidden">
  
          <img src={pig} alt="Piggy bank" className="w-120 h-auto object-fill" />
       

        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-yellow-900 text-center mb-6">Đăng nhập</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-yellow-900 mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="example@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-yellow-900 mb-1" htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl font-semibold transition duration-200"
            >
              Đăng nhập
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Bạn chưa có tài khoản? <a href="/register" className="text-yellow-700 hover:underline">Đăng ký</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
