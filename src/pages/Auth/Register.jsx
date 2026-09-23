import React from 'react';
import { ShieldCheck, FileCheck, Link as LinkIcon, ArrowRight } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="bg-white max-w-3xl w-full rounded-xl shadow-md border border-gray-200 overflow-hidden">
        {/* Header Area */}
        <div className="bg-blue-900 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">MSME / Start-up Registration[cite: 1]</h2>
          <p className="text-blue-200 text-sm">Partner with BEL for a stronger and innovative India.[cite: 1]</p>
        </div>

        {/* Content Area */}
        <div className="p-10 flex flex-col items-center">
          
          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Transparent<br/>Selection[cite: 1]</span>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                <FileCheck className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Secure Document<br/>Verification[cite: 1]</span>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                <LinkIcon className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Blockchain<br/>Backed Records[cite: 1]</span>
            </div>
          </div>

          {/* Action Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-sm font-semibold flex items-center gap-2 transition-colors w-full md:w-auto justify-center shadow-sm">
            Register as MSME / Entrepreneur <ArrowRight className="w-4 h-4" />[cite: 1]
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;