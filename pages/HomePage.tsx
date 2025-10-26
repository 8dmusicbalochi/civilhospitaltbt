
import React from 'react';
import { Link } from 'react-router-dom';
import { DEPARTMENTS, DOCTORS } from '../constants/data';
import { useAnimated } from '../hooks/useAnimated';

const LucideIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => (
  <i data-lucide={name} className={className}></i>
);

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const [ref, animationClasses] = useAnimated();
  return (
    <div ref={ref} className={`${animationClasses} ${className}`}>
      {children}
    </div>
  );
};


const HomePage: React.FC = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/id/22/1920/1080')" }}>
        <div className="absolute inset-0 bg-primary-dark bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 animate-fade-in-down">Compassionate Care, Advanced Medicine</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-up">
            Turbat Civil Hospital is dedicated to providing exceptional healthcare services with a personal touch.
          </p>
          <div className="flex space-x-4">
            <Link to="/appointments" className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-lg">
              Book an Appointment
            </Link>
            <Link to="/about" className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-center">
            <LucideIcon name="PhoneCall" className="w-8 h-8 mr-3"/>
            <span className="font-bold text-xl">Emergency Contact: (123) 456-7890</span>
        </div>
      </div>

      {/* Services Section */}
      <Section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-dark mb-4">Our Medical Services</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">We offer a wide range of specialized medical services to meet all your health needs.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {DEPARTMENTS.slice(0, 4).map((dept) => (
              <div key={dept.name} className="p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <LucideIcon name={dept.icon} className="w-12 h-12 text-primary-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-dark mb-2">{dept.name}</h3>
                <p className="text-slate-600 text-sm">{dept.description}</p>
              </div>
            ))}
          </div>
          <Link to="/departments" className="mt-12 inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-md">
            View All Departments
          </Link>
        </div>
      </Section>

      {/* About Us Section */}
      <Section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://picsum.photos/id/101/800/600" alt="Hospital Building" className="rounded-lg shadow-2xl"/>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-dark mb-4">Welcome to Turbat Civil Hospital</h2>
              <p className="text-slate-600 mb-4">
                Founded with the mission to provide accessible and high-quality healthcare, Turbat Civil Hospital has been a cornerstone of the community's health for over 50 years. We combine experienced medical professionals with cutting-edge technology to ensure the best possible outcomes for our patients.
              </p>
              <p className="text-slate-600 mb-6">
                Our commitment is to your well-being, offering a healing environment where compassion and innovation meet.
              </p>
              <Link to="/about" className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-md">
                Our History & Mission
              </Link>
            </div>
          </div>
        </div>
      </Section>
      
       {/* Meet Our Doctors Section */}
       <Section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-dark mb-4">Meet Our Expert Doctors</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">Our team of dedicated and experienced doctors is here to provide you with the best care.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {DOCTORS.slice(0,3).map((doctor) => (
                    <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <img src={doctor.photo_url} alt={doctor.name} className="w-full h-64 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary-dark">{doctor.name}</h3>
                            <p className="text-secondary font-medium">{doctor.specialty}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/doctors" className="mt-12 inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-md">
                View All Doctors
            </Link>
        </div>
       </Section>

    </div>
  );
};

export default HomePage;
