
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">Turbat Civil Hospital</h3>
            <p className="text-teal-200 text-sm">
              Providing compassionate, high-quality healthcare to our community for decades. Your health is our priority.
            </p>
          </div>
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-teal-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-teal-200 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/departments" className="text-teal-200 hover:text-white transition-colors">Departments</Link></li>
              <li><Link to="/doctors" className="text-teal-200 hover:text-white transition-colors">Find a Doctor</Link></li>
              <li><Link to="/house-job" className="text-teal-200 hover:text-white transition-colors">House Job</Link></li>
              <li><Link to="/tender" className="text-teal-200 hover:text-white transition-colors">Tenders</Link></li>
              <li><Link to="/emails" className="text-teal-200 hover:text-white transition-colors">Email Directory</Link></li>
              <li><Link to="/appointments" className="text-teal-200 hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link to="/admin/login" className="text-teal-200 hover:text-white transition-colors">Admin Panel</Link></li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p className="text-teal-200">Main Hospital Road, Turbat, Balochistan</p>
              <p><a href="tel:+921234567890" className="text-teal-200 hover:text-white transition-colors">(123) 456-7890</a></p>
              <p><a href="mailto:info@turbatcivilhospital.com" className="text-teal-200 hover:text-white transition-colors">info@turbatcivilhospital.com</a></p>
            </address>
          </div>
          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-teal-200 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-1.7 1-3.3 1.8-5.1 2.3-.8 3.7-4 6.8-8 6.5-2.5-.2-4.8-1.6-6.5-3.4-1.8-1.8-3-4.1-3.2-6.7-.2-2.5 1-5 3.2-6.7 2.2-1.7 4.8-2.5 7.5-2.2.8.1 1.5.3 2.3.5.1-.1.2-.2.2-.3 1.2-.7 2.3-1.5 3.4-2.3.1 0 .2.1.2.1z"></path></svg>
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-teal-700 text-center text-sm text-teal-300">
          <p>&copy; {new Date().getFullYear()} Turbat Civil Hospital. All Rights Reserved.</p>
          <p className="mt-1">Website designed and developed by <a href="#" className="font-semibold hover:text-white transition-colors">WB Technology</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
