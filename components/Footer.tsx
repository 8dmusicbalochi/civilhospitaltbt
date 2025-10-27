import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About & Contact Section */}
          <div>
            <h3 className="text-xl font-semibold font-serif mb-4">Civil Hospital Turbat</h3>
            <p className="text-teal-200 text-sm mb-4">
              Civil Hospital Turbat is an extensive multidisciplinary facility of executive health care services in the heart of Turbat.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center text-teal-200">
                <i data-lucide="phone" className="w-4 h-4 mr-2 flex-shrink-0"></i>
                <span>(9852) 999999999</span>
              </p>
              <p className="flex items-center text-teal-200">
                <i data-lucide="mail" className="w-4 h-4 mr-2 flex-shrink-0"></i>
                <a href="mailto:info@cht.gov.pk" className="hover:text-white transition-colors break-all">info@cht.gov.pk</a>
              </p>
            </div>
          </div>

          {/* Departments Section */}
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">Department</h3>
            <ul className="space-y-2 text-sm text-teal-200">
              <li>Dental Care</li>
              <li>Medicine</li>
              <li>Orthopedic</li>
              <li>Emergency</li>
            </ul>
          </div>

          {/* Working Hours Section */}
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">Working Hours</h3>
            <div className="text-sm text-teal-200 space-y-4">
              <div>
                <p className="font-semibold text-white">Out-patient Department</p>
                <p>Monday to Saturday | 8 AM to 2 PM</p>
                <p>Sunday | OPD Closed</p>
              </div>
              <div>
                <p className="font-semibold text-white">Emergency Department & Pharmacy</p>
                <p>24x7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-teal-700 text-center text-sm text-teal-300">
          <p>&copy; {new Date().getFullYear()} Turbat Civil Hospital. All Rights Reserved.</p>
          <p className="mt-1">Website designed and developed by <a href="#" className="font-semibold hover:text-white transition-colors">WB Technology</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;