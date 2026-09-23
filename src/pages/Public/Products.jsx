import React from 'react';
import { 
  Search, Bell, User, Menu, ArrowRight, 
  Crosshair, Radio, Ship, Plane, Zap, ShieldCheck 
} from 'lucide-react';

const Products = () => {
  const productCategories = [
    { name: 'Radar & Fire Control', icon: <Crosshair className="w-16 h-16 text-gray-400" /> },
    { name: 'Communication Systems', icon: <Radio className="w-16 h-16 text-gray-400" /> },
    { name: 'Naval Systems', icon: <Ship className="w-16 h-16 text-gray-400" /> },
    { name: 'Avionics', icon: <Plane className="w-16 h-16 text-gray-400" /> },
    { name: 'Electronic Warfare', icon: <Zap className="w-16 h-16 text-gray-400" /> },
    { name: 'Cyber Security', icon: <ShieldCheck className="w-16 h-16 text-gray-400" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Header / Navigation */}
      <header className="bg-white shadow-sm px-6 py-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-800">
            <h1 className="text-3xl font-bold italic tracking-tighter">BEL</h1>
            <div className="leading-tight text-sm font-semibold">
              <p>Bharat Electronics Limited</p>
              <p className="text-xs text-gray-500 font-normal">Quality, Technology, Innovation.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-3 pr-10 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-blue-500"
              />
              <Search className="absolute right-2 top-1.5 text-gray-400 w-4 h-4" />
            </div>
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
            <User className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />
          </div>
        </div>

        <nav className="flex gap-6 text-sm font-semibold text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Products</a>
          <a href="#" className="hover:text-blue-600">Tenders</a>
          <a href="#" className="hover:text-blue-600">CSR</a>
          <a href="#" className="hover:text-blue-600">Investors</a>
          <a href="#" className="hover:text-blue-600">Careers</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Products & Solutions[cite: 1]</h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-6 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded text-sm font-bold shadow-sm">
            Defence[cite: 1]
          </button>
          <button className="px-6 py-2 bg-white border border-gray-300 text-gray-600 rounded text-sm font-semibold hover:bg-gray-50 transition-colors">
            Non-Defence[cite: 1]
          </button>
          <button className="px-6 py-2 bg-white border border-gray-300 text-gray-600 rounded text-sm font-semibold hover:bg-gray-50 transition-colors">
            Software[cite: 1]
          </button>
          <button className="px-6 py-2 bg-white border border-gray-300 text-gray-600 rounded text-sm font-semibold hover:bg-gray-50 transition-colors">
            Exports[cite: 1]
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {productCategories.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-blue-50/50 rounded flex items-center justify-center mb-4 border border-gray-100">
                {product.icon}
              </div>
              <h3 className="font-semibold text-blue-900 text-center text-sm md:text-base">
                {product.name}[cite: 1]
              </h3>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm">
            View All Products <ArrowRight className="w-4 h-4" />[cite: 1]
          </button>
        </div>
      </main>
    </div>
  );
};

export default Products;