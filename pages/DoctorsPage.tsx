import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase, supabaseUrl } from '../services/supabaseClient';
import { DOCTORS as mockDoctors, DEPARTMENTS } from '../constants/data';
import { Doctor } from '../types';
import { useAnimated } from '../hooks/useAnimated';


const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold font-serif">{title}</h1>
            <p className="text-lg text-teal-200 mt-2">{subtitle}</p>
        </div>
    </div>
);

const DoctorCard: React.FC<{ doctor: Doctor, index: number }> = ({ doctor, index }) => {
    const [ref, animationClasses] = useAnimated({ delay: index * 100 } as any);
    return (
        <div ref={ref} className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${animationClasses}`}>
            <img className="w-full h-80 object-cover" src={doctor.photo_url} alt={`Photo of ${doctor.name}`} loading="lazy" decoding="async" width="300" height="300" />
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold font-serif text-primary-dark">{doctor.name}</h3>
                <p className="text-secondary font-semibold text-lg mb-4">{doctor.specialty}</p>
                <div className="flex-grow">
                    <div className="space-y-3">
                        <div>
                           <h4 className="text-sm font-semibold text-primary-dark flex items-center">
                              <i data-lucide="calendar" className="w-4 h-4 mr-2"></i>
                              Available Days
                           </h4>
                           <div className="flex flex-wrap gap-2 mt-2">
                            {doctor.available_days.map(day => (
                                <span key={day} className="px-2 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">{day}</span>
                            ))}
                           </div>
                        </div>
                        {doctor.availability_time && (
                          <div>
                            <h4 className="text-sm font-semibold text-primary-dark flex items-center">
                               <i data-lucide="clock" className="w-4 h-4 mr-2"></i>
                               Timings
                            </h4>
                            <p className="text-slate-600 text-sm mt-1">{doctor.availability_time}</p>
                          </div>
                        )}
                    </div>
                </div>
                <Link to="/appointments" className="mt-6 w-full text-center px-4 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-full font-semibold transition-transform duration-300 hover:scale-105 shadow-md">
                    Book Appointment
                </Link>
            </div>
        </div>
    );
};


const DoctorsPage: React.FC = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            // Prevent fetch if using placeholder credentials, use mock data instead.
            if (supabaseUrl === 'https://example.supabase.co') {
                console.warn("Using mock doctor data because Supabase credentials are not set.");
                setDoctors(mockDoctors);
                setLoading(false);
                return;
            }
            
            const { data, error } = await supabase.from('doctors').select('*');

            if (error) {
                console.error('Error fetching doctors:', error.message);
                setError('Could not fetch doctor data. Displaying sample data.');
                setDoctors(mockDoctors);
            } else {
                setDoctors(data);
            }
            setLoading(false);
        };

        fetchDoctors();
    }, []);

    useEffect(() => {
        let tempDoctors = doctors;

        // Filter by department
        if (selectedDepartment !== 'All') {
            const departmentSingular = selectedDepartment.endsWith('s')
                ? selectedDepartment.slice(0, -1).toLowerCase()
                : selectedDepartment.toLowerCase();
            
            tempDoctors = tempDoctors.filter(doctor => 
                doctor.specialty.toLowerCase().includes(departmentSingular)
            );
        }

        // Filter by search query
        if (searchQuery.trim() !== '') {
            tempDoctors = tempDoctors.filter(doctor =>
                doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredDoctors(tempDoctors);
    }, [selectedDepartment, searchQuery, doctors]);

    return (
        <div>
            <PageHeader title="Find a Doctor" subtitle="Our Team of Dedicated Medical Professionals" />
            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {loading && <p className="text-center text-lg">Loading doctors...</p>}
                    {error && <p className="text-center text-red-500 bg-red-100 p-4 rounded-md mb-8">{error}</p>}
                    {!loading && (
                        <>
                            <div className="mb-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-end">
                                <div>
                                    <label htmlFor="doctor-search" className="block text-lg font-semibold text-primary-dark mb-2 text-center md:text-left">
                                        Search by Name
                                    </label>
                                    <input
                                        id="doctor-search"
                                        type="text"
                                        placeholder="e.g., Dr. Aisha Khan"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 bg-white rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="department-filter" className="block text-lg font-semibold text-primary-dark mb-2 text-center md:text-left">
                                        Filter by Department
                                    </label>
                                    <select
                                        id="department-filter"
                                        value={selectedDepartment}
                                        onChange={(e) => setSelectedDepartment(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 bg-white rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition-all"
                                    >
                                        <option value="All">All Departments</option>
                                        {DEPARTMENTS.map(dept => (
                                            <option key={dept.name} value={dept.name}>{dept.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            
                            {filteredDoctors.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredDoctors.map((doctor, index) => (
                                        <DoctorCard key={doctor.id} doctor={doctor} index={index} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <p className="text-xl text-slate-600">No doctors found matching your criteria.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DoctorsPage;