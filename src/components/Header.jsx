// src/components/Header.jsx
import { Link } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Trang chủ' },
  { path: '/profile', label: 'Hồ sơ' },
  { path: '/budget', label: 'Ngân sách' },
  { path: '/expenses', label: 'Chi tiêu' },
  { path: '/statistics', label: 'Thống kê' },
  { path: '/review', label: 'Đánh giá' },
  { path: '/login', label: 'Đăng xuất' },
];

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-yellow-100 to-yellow-400 text-yellow-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Chi tiêu cá nhân</h1>
        <nav className="flex gap-2 flex-wrap text-sm">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="px-3 py-1 p-2 rounded-2xl text-lg transition duration-200 hover:bg-white hover:text-amber-700"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
