
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

const EmailContact: React.FC<{ department: string, email: string, index: number }> = ({ department, email, index }) => {
    const [ref, animationClasses] = useAnimated({ delay: index * 100 } as any);
    return (
        <div ref={ref} className={`bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 ${animationClasses}`}>
            <h3 className="text-xl font-semibold text-primary-dark">{department}</h3>
            <a href={`mailto:${email}`} className="font-medium text-secondary hover:underline break-all">
                {email}
            </a>
        </div>
    );
}

const EmailsPage: React.FC = () => {
    const emailList = [
        { department: 'General Inquiries', email: 'info@turbatcivilhospital.com' },
        { department: 'Appointments Desk', email: 'appointments@turbatcivilhospital.com' },
        { department: 'Human Resources (HR)', email: 'hr@turbatcivilhospital.com' },
        { department: 'Billing Department', email: 'billing@turbatcivilhospital.com' },
        { department: 'Procurement & Tenders', email: 'procurement@turbatcivilhospital.com' },
        { department: 'Administration', email: 'admin@turbatcivilhospital.com' },
    ];

    return (
        <div>
            <PageHeader title="Email Directory" subtitle="Connect With the Right Department" />
            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div className="space-y-6">
                        {emailList.map((item, index) => (
                            <EmailContact key={item.department} department={item.department} email={item.email} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailsPage;
