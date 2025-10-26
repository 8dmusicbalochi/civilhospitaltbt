
import React from 'react';
import { useAnimated } from '../hooks/useAnimated';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold font-serif">{title}</h1>
            <p className="text-lg text-teal-200 mt-2">{subtitle}</p>
        </div>
    </div>
);

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const [ref, animationClasses] = useAnimated();
  return (
    <div ref={ref} className={`${animationClasses} ${className}`}>
      {children}
    </div>
  );
};

const AboutPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="About Us" subtitle="A Legacy of Healing and Hope" />

            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Section>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold font-serif text-primary-dark mb-4">Our History</h2>
                                <p className="text-slate-600 mb-4">
                                    Established in 1970, Turbat Civil Hospital began as a small community clinic with a vision to provide essential medical services to the local population. Through decades of dedication, community support, and unwavering commitment to patient care, we have grown into a leading multi-specialty hospital in the region.
                                </p>
                                <p className="text-slate-600">
                                    We continually strive to integrate the latest medical advancements and technologies to enhance our services, ensuring that our community receives world-class healthcare close to home.
                                </p>
                            </div>
                            <div>
                                <img src="https://picsum.photos/id/1018/800/600" alt="Vintage hospital photo" className="rounded-lg shadow-xl" />
                            </div>
                        </div>
                    </Section>

                    <Section className="mt-20">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                             <div className="md:order-2">
                                <h2 className="text-3xl font-bold font-serif text-primary-dark mb-4">Our Mission & Vision</h2>
                                <p className="text-slate-600 mb-4">
                                    <strong>Mission:</strong> To provide compassionate, accessible, high-quality, and cost-effective healthcare to the community; to promote health and well-being, and to participate in appropriate clinical research and education.
                                </p>
                                <p className="text-slate-600">
                                    <strong>Vision:</strong> To be the hospital of choice for patients, physicians, and employees in our region, recognized for our exceptional patient care and innovative services.
                                </p>
                            </div>
                            <div className="md:order-1">
                                <img src="https://picsum.photos/id/30/800/600" alt="Doctor with patient" className="rounded-lg shadow-xl" />
                            </div>
                        </div>
                    </Section>

                    <Section className="mt-20 text-center">
                         <h2 className="text-3xl font-bold font-serif text-primary-dark mb-12">Our Core Values</h2>
                         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="text-xl font-semibold text-primary mb-2">Compassion</h3>
                                <p className="text-slate-600">We treat everyone with kindness and empathy.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="text-xl font-semibold text-primary mb-2">Excellence</h3>
                                <p className="text-slate-600">We pursue the highest standards in all we do.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="text-xl font-semibold text-primary mb-2">Integrity</h3>
                                <p className="text-slate-600">We act with honesty and build trust.</p>
                            </div>
                             <div className="p-6 bg-slate-50 rounded-lg">
                                <h3 className="text-xl font-semibold text-primary mb-2">Teamwork</h3>
                                <p className="text-slate-600">We collaborate to achieve our shared goals.</p>
                            </div>
                         </div>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
