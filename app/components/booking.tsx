"use client";
import { useState } from "react";
import { ChevronDown, Book, NotebookPenIcon } from "lucide-react";
import { toast } from "sonner";



export default function BookingSection() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("wedding");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = {
      name,
      email,
      date,
      eventType,
    };
    console.log("Booking Data:", bookingData);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();
      console.log("Response from server:", data);
      if (!response.ok) {
        throw new Error(data.message || "Failed to submit booking");
      }
      console.log("Booking submitted successfully:", data);
      toast.success("Booking submitted successfully!");
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Failed to submit booking. Please try again.");
    }
  };

  return (
    <section id="booking" className=" overflow-hiddenbg-[#FDFCF9] py-20 px-6 flex flex-col items-center text-center">
      {/* Header Section */}
      <div className="mb-10">
        <h3 className="text-orange-400 text-3xl mb-2">Book us</h3>
        <h2 className="text-5xl font-bold tracking-tight text-slate-900 uppercase">
          For your Event
        </h2>
      </div>

      <p className="text-gray-500 mb-8 font-medium">
        Opening Hour{" "}
        <span className="text-slate-800 font-bold">8:00 AM - 10:00 PM</span>,
        every day on week.
      </p>

      {/* Form Container */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-4">
        {/* Time Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 py-4 px-5 text-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
          />
          <Book className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <div className="relative w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 py-4 px-5 text-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
          />
          <NotebookPenIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Date Input */}
        <div className="relative w-full">
          <input
            type="date"
            placeholder="Date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className=" box-border border border-gray-300 py-4 px-5 pr-30 text-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
          />
        </div>

        {/* Guest Select */}
        <div className="relative w-full">
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full border border-gray-300 py-4 px-5 text-gray-400 appearance-none focus:outline-none focus:border-orange-400 transition-colors bg-transparent"
          >
            <option>wedding</option>
            <option>funerals</option>
            <option>Engagements</option>
            <option>Birthday Parties</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
        </div>

        {/* Submit Button */}
        <button onClick={handleSubmit} className="w-full bg-[#ffa132] hover:bg-[#ff8c1a] text-slate-900 font-bold py-4 px-10 uppercase transition-all tracking-widest whitespace-nowrap">
          Book Us
        </button>
      </div>
    </section>
  );
}
