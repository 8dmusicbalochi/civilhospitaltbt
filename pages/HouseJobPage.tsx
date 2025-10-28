
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

const Section: React.FC<{ children: React.ReactNode; className?: string; title: string }> = ({ children, className, title }) => {
  const [ref, animationClasses] = useAnimated();
  return (
    <div ref={ref} className={`${animationClasses} ${className}`}>
      <h2 className="text-3xl font-bold font-serif text-primary-dark mb-6">{title}</h2>
      <div className="prose max-w-none text-slate-600">
        {children}
      </div>
    </div>
  );
};

const HouseJobPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="House Job Opportunities" subtitle="Start Your Medical Career With Us" />

            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="space-y-12">
                        <Section title="About the Program">
                           <p>
                                Turbat Civil Hospital offers a one-year, comprehensive, and structured House Job (Internship) program for fresh medical graduates. Our program is designed to provide hands-on clinical experience under the supervision of senior consultants across various medical and surgical specialties. We are committed to fostering a learning environment that prepares you for a successful and compassionate medical career.
                            </p>
                            <p>
                                Interns will rotate through major departments including Medicine, Surgery, Pediatrics, and Gynecology, gaining invaluable skills and knowledge.
                            </p>
                        </Section>

                        <Section title="Eligibility Criteria">
                            <ul>
                                <li>MBBS or equivalent degree from a PM&DC recognized institution.</li>
                                <li>Valid provisional PM&DC registration.</li>
                                <li>Must have passed the National Licensing Examination (NLE), if applicable.</li>
                                <li>Excellent academic record and strong interpersonal skills.</li>
                            </ul>
                        </Section>

                        <Section title="How to Apply">
                            <p>
                                Applications for the House Job program are typically accepted in November each year for the January intake. Please follow these steps to apply:
                            </p>
                            <ol>
                                <li>Download the application form from our website (link will be available during the application period).</li>
                                <li>Fill out the form completely and attach all required documents.</li>
                                <li>Submit the application package to the hospital's administration office before the deadline.</li>
                                <li>Shortlisted candidates will be contacted for an interview.</li>
                            </ol>
                            <p>
                                Keep an eye on our 'News' section for the official announcement.
                            </p>
                        </Section>

                        <Section title="Contact for Inquiries">
                            <p>
                                For any questions regarding the House Job program, please contact the Human Resources department:
                            </p>
                            <p>
                                <strong>Email:</strong> <a href="mailto:hr@cht.gov.pk" className="text-secondary">hr@cht.gov.pk</a><br/>
                                <strong>Phone:</strong> (123) 456-7892
                            </p>
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseJobPage;
