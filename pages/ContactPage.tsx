
import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold font-serif">{title}</h1>
            <p className="text-lg text-teal-200 mt-2">{subtitle}</p>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
    };

    return (
        <div>
            <PageHeader title="Contact Us" subtitle="We're here to help. Get in touch with us." />
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-teal-100 p-3 rounded-full"><i data-lucide="MapPin" className="text-primary"></i></div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary-dark">Address</h3>
                                    <p className="text-slate-600">Civil Hospital OPD, Turbat, Balochistan, Pakistan</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                 <div className="bg-teal-100 p-3 rounded-full"><i data-lucide="Phone" className="text-primary"></i></div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary-dark">Phone</h3>
                                    <p className="text-slate-600">Emergency: 0852-111111</p>
                                    <p className="text-slate-600">Appointments: 0852-222222</p>
                                </div>
                            </div>
                             <div className="flex items-start space-x-4">
                                 <div className="bg-teal-100 p-3 rounded-full"><i data-lucide="Mail" className="text-primary"></i></div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary-dark">Email</h3>
                                    <p className="text-slate-600">info@cht.gov.pk</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-slate-50 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold font-serif text-primary-dark mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                               <div className="grid sm:grid-cols-2 gap-6">
                                     <div>
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                        <input type="text" name="contact-name" id="contact-name" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">Email Address</label>
                                        <input type="email" name="contact-email" id="contact-email" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                                    </div>
                               </div>
                                <div>
                                    <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700">Subject</label>
                                    <input type="text" name="contact-subject" id="contact-subject" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700">Message</label>
                                    <textarea name="contact-message" id="contact-message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-md">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
             {/* Map Section */}
            <div className="w-full h-[450px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2205.02529003738!2d63.06267363063661!3d25.989223408988668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb8a741e9e213d5%3A0xd1d184d7266d5ebd!2sCivil%20Hospital%20OPD!5e1!3m2!1sen!2sus!4v1761640978917!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Civil Hospital OPD Location"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactPage;
