
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AdminLoginProps {
    setAuth: (isAuth: boolean) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ setAuth }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, this would be a call to an authentication server.
        // For this example, we use a simple hardcoded password.
        if (password === 'admin123') {
            setError('');
            setAuth(true);
            navigate('/admin/dashboard');
        } else {
            setError('Invalid password. Please try again.');
            setAuth(false);
        }
    };

    return (
        <div className="bg-slate-100 flex items-center justify-center py-20 min-h-[calc(100vh-200px)]">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
                <h1 className="text-3xl font-bold text-center text-primary-dark font-serif">Admin Login</h1>
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="password" className="text-sm font-bold text-gray-600 block">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                            placeholder="Hint: admin123"
                        />
                    </div>
                    {error && <p className="text-sm text-center text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
                    <div>
                        <button type="submit" className="w-full px-4 py-3 text-lg font-semibold text-white bg-secondary rounded-full hover:bg-secondary/90 transition-colors shadow-md">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
