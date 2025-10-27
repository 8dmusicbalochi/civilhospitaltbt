
import React from 'react';
import { SERVICES } from '../constants/data';
import { useAnimated } from '../hooks/useAnimated';
import { Service } from '../types';

const LucideIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => (
  <i data-lucide={name} className={className}></i>
);

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold font-serif">{title}</h1>
            <p className="text-lg text-teal-200 mt-2">{subtitle}</p>
        </div>
    </div>
);

const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
    const [ref, animationClasses] = useAnimated({ delay: index * 100 } as any);
    return (
        <div ref={ref} className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center ${animationClasses}`}>
            <div className="bg-teal-100 p-4 rounded-full mb-4">
                <LucideIcon name={service.icon} className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-primary-dark mb-2">{service.name}</h3>
            <p className="text-slate-600">{service.description}</p>
        </div>
    );
};

const OurServicesPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="Our Services" subtitle="Comprehensive Care for Your Health and Well-being" />
            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service, index) => (
                           <ServiceCard key={service.name} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServicesPage;
