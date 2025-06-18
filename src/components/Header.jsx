// src/components/Header.jsx
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.jpg'
const navItems = [
  { path: '/', label: 'Trang chủ' },
  { path: '/budget', label: 'Ngân sách' },
  { path: '/expenses', label: 'Chi tiêu' },
  { path: '/statistics', label: 'Thống kê' },
  { path: '/review', label: 'Đánh giá' },
];

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-yellow-100 to-yellow-400 text-yellow-900 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center gap-5 p-2">
        {/* Logo + tên thương hiệu */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="w-15 h-15 object-contain rounded-full bg-white p-1 shadow"
          />
          <div className="leading-tight">
            <h1 className="text-2xl font-bold">MoneyMate</h1>
            <p className="italic text-sm">Money Master, Made Easy</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-5 flex-wrap text-base">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `p-2 text-lg rounded-xl transition duration-200 hover:bg-white hover:text-amber-700 ${
                  isActive ? 'bg-white text-amber-700' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* User info + avatar */}
        <div className="flex items-center gap-4">
          <div className="leading-tight">
            <p className="italic text-lg">Xin chào Dat</p>
          </div>
          <img
            src={avatar}
            alt="Avatar"
            className="w-15 h-15 object-contain rounded-full bg-white p-1 shadow"
          />
        </div>
      </div>
    </header>
  );
}
