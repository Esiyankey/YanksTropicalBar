import React from 'react';
import { Clock, Calendar, ChevronDown } from 'lucide-react';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

export default function BookingSection() {
  return (
    <section className="bg-[#FDFCF9] py-20 px-6 flex flex-col items-center text-center">
      {/* Header Section */}
      <div className="mb-10">
        <h3 className={`${dancingScript.className} text-orange-400 text-3xl mb-2`}>
          Book us
        </h3>
        <h2 className="text-5xl font-bold tracking-tight text-slate-900 uppercase">
          For your Event
        </h2>
      </div>

      <p className="text-gray-500 mb-8 font-medium">
        Opening Hour <span className="text-slate-800 font-bold">8:00 AM - 10:00 PM</span>, every day on week.
      </p>

      {/* Form Container */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-4">
        
        {/* Time Input */}
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Time" 
            className="w-full border border-gray-300 py-4 px-5 text-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
          />
          <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Date Input */}
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Date" 
            className="w-full border border-gray-300 py-4 px-5 text-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
          />
          <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Guest Select */}
        <div className="relative w-full">
          <select className="w-full border border-gray-300 py-4 px-5 text-gray-400 appearance-none focus:outline-none focus:border-orange-400 transition-colors bg-transparent">
            <option>wedding</option>
            <option>funerals</option>
            <option>Engagements</option>
            <option>Birthday Parties</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-[#FFB300] hover:bg-orange-500 text-slate-900 font-bold py-4 px-10 uppercase transition-all tracking-widest whitespace-nowrap">
          Book Us
        </button>
      </div>

      
    </section>
  );
}