// src/layouts/MainLayout.jsx
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
