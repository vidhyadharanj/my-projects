import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserCog, Users, User, Briefcase, UserRound } from 'lucide-react';

const Login = () => {
  // 1. Initialize the navigation hook
  const navigate = useNavigate(); 

  // 2. We add a 'path' property to each role so the app knows which page (frame) to load
  const roles = [
    { name: 'Administrator', icon: <UserCog className="w-5 h-5" />, path: '/dashboard/admin' },
    { name: 'Management / Manager', icon: <Users className="w-5 h-5" />, path: '/dashboard/manager' },
    { name: 'Employee / Worker', icon: <User className="w-5 h-5" />, path: '/dashboard/worker' },
    { name: 'Vendor / Entrepreneur', icon: <Briefcase className="w-5 h-5" />, path: '/dashboard/projects' },
    { name: 'Public User', icon: <UserRound className="w-5 h-5" />, path: '/tenders' },
  ];

  // 3. The function that triggers the frame-to-frame navigation
  const handleRoleLogin = (path) => {
    navigate(path); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="bg-white max-w-md w-full rounded-xl shadow-md border border-gray-200 p-8">
        
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 text-blue-800 mb-4">
            <h1 className="text-4xl font-bold italic tracking-tighter">BEL</h1>
          </div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Bharat Electronics Limited</p>
          <h2 className="text-xl font-bold text-gray-800">Access Portal</h2>
          <p className="text-sm text-gray-500 mt-1">Login to continue</p>
        </div>

        {/* Role Selection Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          {roles.map((role, index) => (
            <button 
              key={index} 
              onClick={() => handleRoleLogin(role.path)}
              className="group w-full flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors text-left"
            >
              <span className="text-gray-400 group-hover:text-blue-500">{role.icon}</span>
              {role.name}
            </button>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center border-t border-gray-100 pt-4 mt-2">
          <Link to="/register" className="text-sm text-blue-600 hover:underline font-medium">
            New User? Register Here
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Login;