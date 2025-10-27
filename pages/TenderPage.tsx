
import React from 'react';
import { TENDERS } from '../constants/data';
import { useAnimated } from '../hooks/useAnimated';
import { Tender } from '../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold font-serif">{title}</h1>
            <p className="text-lg text-teal-200 mt-2">{subtitle}</p>
        </div>
    </div>
);

const TenderRow: React.FC<{ tender: Tender, index: number }> = ({ tender, index }) => {
    const [ref, animationClasses] = useAnimated({ delay: index * 100 } as any);
    return (
        <tr ref={ref} className={`border-b border-slate-200 ${animationClasses}`}>
            <td className="p-4 text-slate-600">{tender.ref}</td>
            <td className="p-4 font-semibold text-primary-dark">{tender.title}</td>
            <td className="p-4 text-slate-600">{tender.closingDate}</td>
            <td className="p-4">
                <a href={tender.documentUrl} className="font-semibold text-secondary hover:underline" download>
                    Download
                </a>
            </td>
        </tr>
    );
}

const TenderPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="Tenders & Procurement" subtitle="Opportunities for Suppliers and Partners" />
            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold font-serif text-primary-dark mb-8 text-center">Current Open Tenders</h2>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left">
                              <thead className="bg-slate-50 border-b border-slate-200">
                                  <tr>
                                      <th className="p-4 font-semibold text-slate-600">Reference No.</th>
                                      <th className="p-4 font-semibold text-slate-600">Title</th>
                                      <th className="p-4 font-semibold text-slate-600">Closing Date</th>
                                      <th className="p-4 font-semibold text-slate-600">Documents</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {TENDERS.map((tender, index) => (
                                      <TenderRow key={tender.id} tender={tender} index={index} />
                                  ))}
                              </tbody>
                          </table>
                        </div>
                        {TENDERS.length === 0 && <p className="p-8 text-center text-slate-500">There are no open tenders at the moment. Please check back later.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenderPage;
