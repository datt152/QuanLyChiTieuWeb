import logo from '../assets/logo.png';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-100 to-yellow-400 text-yellow-900 px-8 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Cột trái: Logo + thông tin */}
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 object-contain rounded-full bg-white p-1 shadow"
            />
            <div>
              <h2 className="text-xl font-bold">MoneyMate</h2>
              <p className="italic text-sm">Money Master, Made Easy</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaEnvelope className="mt-1" />
            <a href="mailto:contact@moneymate.vn" className="hover:underline">
              contact@moneymate.vn
            </a>
          </div>

          <div className="flex items-start gap-2">
            <FaPhone className="mt-1" />
            <a href="tel:+840123456789" className="hover:underline">
              +84 0123 456 789
            </a>
          </div>

          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" />
            <p>
              Trường Đại học Công nghiệp TP.HCM<br />
              12 Nguyễn Văn Bảo, Gò Vấp, TP.HCM
            </p>
          </div>
        </div>


        <div className="w-full md:w-1/2 h-64">
          <iframe
            title="Google Map - IUH"
            className="w-full h-full rounded-xl shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8040484297596!2d106.6868454!3d10.8221589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2zVHLGsOG7nW5nIMSQ4bqhaSBob2MgQ8O0bmcgbmdoaeG7h3AgVFAuSEM!5e0!3m2!1svi!2s!4v1718613259826!5m2!1svi!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

     
    </footer>
  );
}
