import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, supabaseUrl } from '../../services/supabaseClient';
import { Appointment, Doctor, NewsArticle } from '../../types';

type AdminTab = 'appointments' | 'doctors' | 'news';

const AdminDashboard: React.FC<{ setAuth: (isAuth: boolean) => void }> = ({ setAuth }) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<AdminTab>('appointments');
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [showDoctorForm, setShowDoctorForm] = useState(false);
    const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '', photo_url: '', available_days: '', availability_time: '' });

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        
        if (supabaseUrl === 'https://example.supabase.co') {
            setError('Database is not configured. Please update Supabase credentials in services/supabaseClient.ts');
            setLoading(false);
            setAppointments([]);
            setDoctors([]);
            setNews([]);
            return;
        }

        try {
            const [appointmentsRes, doctorsRes, newsRes] = await Promise.all([
                supabase.from('appointments').select('*').order('date', { ascending: false }),
                supabase.from('doctors').select('*').order('name'),
                supabase.from('news').select('*').order('date', { ascending: false }),
            ]);

            if (appointmentsRes.error) throw new Error(`Appointments: ${appointmentsRes.error.message}`);
            if (doctorsRes.error) throw new Error(`Doctors: ${doctorsRes.error.message}`);
            if (newsRes.error) throw new Error(`News: ${newsRes.error.message}`);
            
            setAppointments(appointmentsRes.data as Appointment[]);
            setDoctors(doctorsRes.data as Doctor[]);
            setNews(newsRes.data as NewsArticle[]);

        } catch (err: any) {
            setError(`Failed to fetch data. Make sure your Supabase client is configured. Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    const handleLogout = () => {
        setAuth(false);
        navigate('/admin/login');
    };

    const handleDelete = async (table: string, id: number) => {
        if (supabaseUrl === 'https://example.supabase.co') {
            alert('Database is not configured. Cannot delete item.');
            return;
        }
        if (!window.confirm('Are you sure you want to delete this item?')) return;
        
        const { error } = await supabase.from(table).delete().match({ id });

        if (error) {
            alert(`Error deleting item: ${error.message}`);
        } else {
            alert('Item deleted successfully.');
            fetchData(); // Refresh data
        }
    };
    
    const handleAddDoctor = async (e: React.FormEvent) => {
        e.preventDefault();
        if (supabaseUrl === 'https://example.supabase.co') {
            alert('Database is not configured. Cannot add doctor.');
            return;
        }
        const doctorToAdd = {
            ...newDoctor,
            available_days: newDoctor.available_days.split(',').map(day => day.trim()),
        };
        const { data, error } = await supabase.from('doctors').insert([doctorToAdd]).select();
        
        if (error) {
            alert(`Error adding doctor: ${error.message}`);
        } else {
            alert('Doctor added successfully!');
            setDoctors(prev => [...prev, ...(data as Doctor[])]);
            setShowDoctorForm(false);
            setNewDoctor({ name: '', specialty: '', photo_url: '', available_days: '', availability_time: '' });
        }
    };


    const renderContent = () => {
        if (loading) return <p className="text-center p-8">Loading dashboard...</p>;
        if (error) return <p className="text-center text-red-600 bg-red-100 p-4 rounded-md">{error}</p>;

        switch (activeTab) {
            case 'appointments':
                return (
                    <div className="space-y-4">
                        {appointments.length > 0 ? appointments.map(app => (
                            <div key={app.id} className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-primary-dark">{app.name} - {app.phone}</p>
                                    <p className="text-sm text-slate-600">{app.department} on {new Date(app.date).toLocaleDateString()}</p>
                                    {app.message && <p className="text-xs text-slate-500 mt-1 italic">"{app.message}"</p>}
                                </div>
                                <button onClick={() => handleDelete('appointments', app.id)} className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-full">Delete</button>
                            </div>
                        )) : <p>No appointments found.</p>}
                    </div>
                );
            case 'doctors':
                 return (
                    <div>
                        <button onClick={() => setShowDoctorForm(!showDoctorForm)} className="mb-4 px-4 py-2 bg-secondary text-white rounded-full hover:bg-secondary/90">{showDoctorForm ? 'Cancel' : 'Add New Doctor'}</button>
                        {showDoctorForm && (
                            <form onSubmit={handleAddDoctor} className="bg-white p-6 rounded-lg shadow-md mb-6 space-y-4">
                                <h3 className="text-xl font-bold font-serif text-primary-dark">New Doctor Profile</h3>
                                <input type="text" placeholder="Full Name" value={newDoctor.name} onChange={e => setNewDoctor({...newDoctor, name: e.target.value})} className="w-full p-2 border rounded" required />
                                <input type="text" placeholder="Specialty" value={newDoctor.specialty} onChange={e => setNewDoctor({...newDoctor, specialty: e.target.value})} className="w-full p-2 border rounded" required />
                                <input type="text" placeholder="Photo URL" value={newDoctor.photo_url} onChange={e => setNewDoctor({...newDoctor, photo_url: e.target.value})} className="w-full p-2 border rounded" required />
                                <input type="text" placeholder="Available Days (comma-separated)" value={newDoctor.available_days} onChange={e => setNewDoctor({...newDoctor, available_days: e.target.value})} className="w-full p-2 border rounded" required />
                                <input type="text" placeholder="Availability Time (e.g., 9 AM - 5 PM)" value={newDoctor.availability_time} onChange={e => setNewDoctor({...newDoctor, availability_time: e.target.value})} className="w-full p-2 border rounded" />
                                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">Save Doctor</button>
                            </form>
                        )}
                        <div className="space-y-4">
                            {doctors.length > 0 ? doctors.map(doc => (
                                <div key={doc.id} className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={doc.photo_url} alt={doc.name} className="w-16 h-16 rounded-full object-cover border-2 border-slate-200" />
                                        <div>
                                            <p className="font-bold text-primary-dark">{doc.name}</p>
                                            <p className="text-secondary">{doc.specialty}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDelete('doctors', doc.id)} className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-full flex-shrink-0">Delete</button>
                                </div>
                            )) : <p>No doctors found.</p>}
                        </div>
                    </div>
                );
            case 'news':
                 return (
                    <div className="space-y-4">
                        {/* Add news form can be added here similarly to doctors */}
                        <p className="p-4 bg-blue-100 text-blue-800 rounded-md">News management functionality coming soon.</p>
                        {news.length > 0 ? news.map(item => (
                            <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-primary-dark">{item.title}</p>
                                    <p className="text-sm text-slate-500">{new Date(item.date).toLocaleDateString()}</p>

                                </div>
                                <button onClick={() => handleDelete('news', item.id)} className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-full">Delete</button>
                            </div>
                        )) : <p>No news articles found.</p>}
                    </div>
                );
            default:
                return null;
        }
    };

    const TabButton: React.FC<{ tab: AdminTab, label: string }> = ({ tab, label }) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === tab ? 'bg-white text-primary-dark border-b-2 border-primary' : 'bg-slate-100 text-slate-600'}`}
        >
            {label}
        </button>
    );

    return (
        <div className="bg-slate-100 min-h-screen">
            <header className="bg-primary-dark text-white p-4 flex justify-between items-center shadow-md">
                <h1 className="text-2xl font-bold font-serif">Admin Dashboard</h1>
                <button onClick={handleLogout} className="px-4 py-2 bg-secondary hover:bg-secondary/90 rounded-full text-sm">Logout</button>
            </header>
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="flex border-b border-slate-300 mb-6">
                    <TabButton tab="appointments" label="Appointments" />
                    <TabButton tab="doctors" label="Doctors" />
                    <TabButton tab="news" label="News" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;