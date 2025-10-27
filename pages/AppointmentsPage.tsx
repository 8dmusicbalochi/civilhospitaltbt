
import React, { useState } from 'react';
import { supabase, supabaseUrl } from '../services/supabaseClient';
import { DEPARTMENTS } from '../constants/data';
import { Appointment } from '../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold font-serif">{title}</h1>
            <p className="text-lg text-teal-200 mt-2">{subtitle}</p>
        </div>
    </div>
);

const AppointmentsPage: React.FC = () => {
    const [formData, setFormData] = useState<Omit<Appointment, 'id'>>({
        name: '',
        phone: '',
        department: '',
        date: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setMessage('');
        
        // Prevent submission if using placeholder credentials.
        if (supabaseUrl === 'https://example.supabase.co') {
            setStatus('error');
            setMessage('Database is not configured. Could not save appointment.');
            console.error('Appointment submission error: Supabase credentials are not set.');
            return;
        }

        const { data, error } = await supabase.from('appointments').insert([formData]);

        if (error) {
            setStatus('error');
            setMessage(`Failed to book appointment: ${error.message}. Please try again.`);
            console.error('Appointment submission error:', error.message);
        } else {
            setStatus('success');
            setMessage('Your appointment has been successfully booked! We will contact you shortly.');
            setFormData({ name: '', phone: '', department: '', date: '', message: '' });
        }
    };

    return (
        <div>
            <PageHeader title="Book an Appointment" subtitle="Schedule your visit with us online" />
            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                    <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
                        <h2 className="text-2xl font-bold font-serif text-primary-dark mb-6">Patient Information</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                                <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="department" className="block text-sm font-medium text-slate-700">Department</label>
                                <select name="department" id="department" required value={formData.department} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                    <option value="" disabled>Select a department</option>
                                    {DEPARTMENTS.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                                </select>
                            </div>
                             <div>
                                <label htmlFor="date" className="block text-sm font-medium text-slate-700">Preferred Date</label>
                                <input type="date" name="date" id="date" required value={formData.date} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message (Optional)</label>
                                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={status === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-slate-400">
                                    {status === 'submitting' ? 'Booking...' : 'Confirm Appointment'}
                                </button>
                            </div>
                        </form>
                         {message && (
                            <div className={`mt-6 p-4 rounded-md text-center ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsPage;