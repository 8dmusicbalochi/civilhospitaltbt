
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DepartmentsPage from './pages/DepartmentsPage';
import DoctorsPage from './pages/DoctorsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';

/*
  DEPLOYMENT INSTRUCTIONS:

  For Netlify:
  1. Push your code to a GitHub, GitLab, or Bitbucket repository.
  2. Log in to Netlify and click "New site from Git".
  3. Choose your Git provider and select your repository.
  4. Configure build settings:
     - Build command: `vite build` or `npm run build`
     - Publish directory: `dist`
  5. Add your Supabase environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) in the Netlify UI under "Site settings" > "Build & deploy" > "Environment".
  6. Click "Deploy site".

  For Namecheap cPanel:
  1. Run the build command locally: `npm run build`.
  2. This will create a `dist` folder.
  3. Open cPanel, go to "File Manager".
  4. Navigate to the `public_html` directory (or the domain's root folder).
  5. Upload the *contents* of the `dist` folder into `public_html`.
  6. Your site should now be live.
  7. NOTE: Environment variables need to be handled differently. Since cPanel serves static files, you can't use server-side environment variables easily. A common approach is to have a configuration file that you replace during your build process, or to hardcode them (not recommended for production).
*/


const App: React.FC = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(sessionStorage.getItem('isAdminAuthenticated') === 'true');

  const setAuth = (isAuth: boolean) => {
    if (isAuth) {
      sessionStorage.setItem('isAdminAuthenticated', 'true');
    } else {
      sessionStorage.removeItem('isAdminAuthenticated');
    }
    setIsAdminAuthenticated(isAuth);
  };


  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-slate-50 text-slate-800 font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/login" element={<AdminLogin setAuth={setAuth} />} />
            <Route 
              path="/admin/dashboard" 
              element={isAdminAuthenticated ? <AdminDashboard setAuth={setAuth} /> : <Navigate to="/admin/login" />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
