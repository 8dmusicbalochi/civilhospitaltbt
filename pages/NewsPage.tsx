
import React from 'react';
import { NEWS } from '../constants/data';
import { NewsArticle } from '../types';
import { useAnimated } from '../hooks/useAnimated';


const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold font-serif">{title}</h1>
            <p className="text-lg text-teal-200 mt-2">{subtitle}</p>
        </div>
    </div>
);

const NewsCard: React.FC<{ article: NewsArticle, index: number }> = ({ article, index }) => {
    const [ref, animationClasses] = useAnimated({ delay: index * 100 } as any);
    return (
        <div ref={ref} className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${animationClasses}`}>
            <img className="w-full h-56 object-cover" src={article.imageUrl} alt={article.title} />
            <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-slate-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-bold font-serif text-primary-dark mb-4 flex-grow">{article.title}</h3>
                <p className="text-slate-600 mb-4">{article.excerpt}</p>
                <a href="#" className="mt-auto font-semibold text-secondary hover:text-secondary/90 transition-colors">
                    Read More &rarr;
                </a>
            </div>
        </div>
    );
};

const NewsPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="News & Updates" subtitle="Stay Informed About Our Hospital and Community Health" />
            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {NEWS.map((article, index) => (
                            <NewsCard key={article.id} article={article} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
