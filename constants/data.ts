
import { Department, Doctor, NewsArticle, Service, Tender } from '../types';

export const DEPARTMENTS: Department[] = [
  { name: 'Cardiology', description: 'Expert care for heart and vascular diseases.', icon: 'HeartPulse' },
  { name: 'Pediatrics', description: 'Comprehensive healthcare for children from birth to adolescence.', icon: 'Baby' },
  { name: 'Surgery', description: 'Advanced surgical procedures with state-of-the-art technology.', icon: 'Scissors' },
  { name: 'Radiology', description: 'High-quality diagnostic imaging services.', icon: 'Radiation' },
  { name: 'Neurology', description: 'Treating disorders of the nervous system.', icon: 'BrainCircuit' },
  { name: 'Oncology', description: 'Dedicated cancer treatment and patient support.', icon: 'Ribbon' },
  { name: 'Orthopedics', description: 'Specialized care for bones, joints, and muscles.', icon: 'Bone' },
  { name: 'Emergency', description: '24/7 critical care for urgent medical needs.', icon: 'Siren' },
];

export const DOCTORS: Doctor[] = [
  { id: 1, name: 'Dr. Aisha Khan', specialty: 'Cardiologist', photo_url: 'https://picsum.photos/id/1005/300/300', available_days: ['Monday', 'Wednesday', 'Friday'], availability_time: '10:00 AM - 1:00 PM' },
  { id: 2, name: 'Dr. Bilal Ahmed', specialty: 'Pediatrician', photo_url: 'https://picsum.photos/id/1011/300/300', available_days: ['Tuesday', 'Thursday'], availability_time: '9:00 AM - 12:00 PM' },
  { id: 3, name: 'Dr. Fatima Ali', specialty: 'General Surgeon', photo_url: 'https://picsum.photos/id/1027/300/300', available_days: ['Monday', 'Tuesday', 'Thursday'], availability_time: '2:00 PM - 5:00 PM' },
  { id: 4, name: 'Dr. Usman Tariq', specialty: 'Neurologist', photo_url: 'https://picsum.photos/id/1012/300/300', available_days: ['Wednesday', 'Friday'], availability_time: '11:00 AM - 2:00 PM' },
  { id: 5, name: 'Dr. Sana Javed', specialty: 'Oncologist', photo_url: 'https://picsum.photos/id/10/300/300', available_days: ['Tuesday', 'Thursday'], availability_time: '10:00 AM - 4:00 PM' },
  { id: 6, name: 'Dr. Hassan Raza', specialty: 'Orthopedic Surgeon', photo_url: 'https://picsum.photos/id/1025/300/300', available_days: ['Monday', 'Wednesday'], availability_time: '9:00 AM - 1:00 PM' },
];

export const NEWS: NewsArticle[] = [
  { id: 1, title: 'Free Health Camp Announced for Next Month', excerpt: 'Turbat Civil Hospital is proud to announce a free health check-up camp for all residents on the 15th of next month.', date: 'October 26, 2023', imageUrl: 'https://picsum.photos/id/23/600/400' },
  { id: 2, title: 'New Pediatric Wing Inaugurated', excerpt: 'Our new state-of-the-art pediatric wing is now open, providing specialized care for our youngest patients.', date: 'October 15, 2023', imageUrl: 'https://picsum.photos/id/34/600/400' },
  { id: 3, title: 'Public Health Awareness Seminar on Diabetes', excerpt: 'Join us for an informative seminar on managing and preventing diabetes, led by our top endocrinologists.', date: 'September 30, 2023', imageUrl: 'https://picsum.photos/id/45/600/400' },
];

export const SERVICES: Service[] = [
  { name: '24/7 Emergency Care', description: 'Immediate medical attention for critical and life-threatening conditions, available around the clock.', icon: 'Siren' },
  { name: 'In-Patient Department (IPD)', description: 'Comfortable and well-equipped wards for patients requiring overnight hospital stay and care.', icon: 'Bed' },
  { name: 'Out-Patient Department (OPD)', description: 'Consultation with specialists for non-emergency medical issues without hospital admission.', icon: 'Stethoscope' },
  { name: 'Advanced Surgical Units', description: 'State-of-the-art operation theaters for a wide range of surgical procedures.', icon: 'Scissors' },
  { name: 'Diagnostic Laboratory', description: 'Accurate and timely lab tests to aid in the diagnosis and treatment of diseases.', icon: 'TestTube2' },
  { name: 'Radiology & Imaging', description: 'Advanced imaging services including X-Ray, CT scans, and Ultrasound for precise diagnosis.', icon: 'Radiation' },
  { name: 'Pharmacy Services', description: 'In-house pharmacy providing authentic medicines and healthcare products 24/7.', icon: 'Pill' },
  { name: 'Maternity & Child Care', description: 'Comprehensive care for mothers and newborns, from pregnancy through childbirth and postnatal period.', icon: 'Baby' },
];

export const TENDERS: Tender[] = [
    { id: 1, title: 'Supply of Medical Equipment for Cardiology Department', ref: 'TCH/TEN/2024/001', closingDate: 'December 15, 2024', documentUrl: '#' },
    { id: 2, title: 'Annual Maintenance Contract for Hospital Generators', ref: 'TCH/TEN/2024/002', closingDate: 'December 20, 2024', documentUrl: '#' },
    { id: 3, title: 'Procurement of Laboratory Reagents and Consumables', ref: 'TCH/TEN/2024/003', closingDate: 'December 25, 2024', documentUrl: '#' },
    { id: 4, title: 'Outsourcing of Hospital Security Services', ref: 'TCH/TEN/2024/004', closingDate: 'December 30, 2024', documentUrl: '#' },
];