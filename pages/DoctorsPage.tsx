
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import { DOCTORS as mockDoctors } from '../constants/data';
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
            <img className="w-full h-80 object-cover" src={doctor.photo_url} alt={`Photo of ${doctor.name}`} />
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold font-serif text-primary-dark">{doctor.name}</h3>
                <p className="text-secondary font-semibold text-lg mb-4">{doctor.specialty}</p>
                <div className="flex-grow">
                    <p className="text-slate-600"><span className="font-semibold">Available:</span> {doctor.available_days.join(', ')}</p>
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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            const { data, error } = await supabase.from('doctors').select('*');

            if (error) {
                console.error('Error fetching doctors:', error);
                setError('Could not fetch doctor data. Displaying sample data.');
                setDoctors(mockDoctors);
            } else {
                setDoctors(data);
            }
            setLoading(false);
        };

        fetchDoctors();
    }, []);

    return (
        <div>
            <PageHeader title="Find a Doctor" subtitle="Our Team of Dedicated Medical Professionals" />
            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {loading && <p className="text-center text-lg">Loading doctors...</p>}
                    {error && <p className="text-center text-red-500 bg-red-100 p-4 rounded-md mb-8">{error}</p>}
                    {!loading && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {doctors.map((doctor, index) => (
                                <DoctorCard key={doctor.id} doctor={doctor} index={index} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DoctorsPage;
