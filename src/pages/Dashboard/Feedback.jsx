import React from 'react';
import { Star, MessageSquare, UserCircle } from 'lucide-react';

const Feedback = () => {
  const reviews = [
    {
      text: '"BEL is making india proud with advanced technology."[cite: 1]',
      author: '- Ananya, Bengaluru[cite: 1]'
    },
    {
      text: '"Excellent career growth and work culture."[cite: 1]',
      author: '- Ramesh, Chennai[cite: 1]'
    },
    {
      text: '"Great CSR initiatives for society."[cite: 1]',
      author: '- Priya, Hyderabad[cite: 1]'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      {/* Assuming Sidebar is handled by a parent layout in actual implementation */}
      <main className="flex-1 p-8 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Public Feedback[cite: 1]</h2>
          <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100">
            <span className="font-bold text-yellow-700">4.8/5[cite: 1]</span>
            <div className="flex text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" opacity={0.5} />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
              <MessageSquare className="w-6 h-6 text-blue-200 mb-4" />
              <p className="text-gray-700 text-sm font-medium mb-6 leading-relaxed">
                {review.text}[cite: 1]
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                <UserCircle className="w-4 h-4" />
                {review.author}[cite: 1]
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors shadow-sm">
            Submit Your Feedback →[cite: 1]
          </button>
        </div>
      </main>
    </div>
  );
};

export default Feedback;