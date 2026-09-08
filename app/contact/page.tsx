'use client';

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import { toast } from "sonner";
import { useStore } from "@/app/store/useStore";


type Data = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const ContactPage = () => {
  const { Data, setData, clearData } = useStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Contact Data:", Data);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Data), // ✅ using Zustand data
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit Contact Form");
      }

      toast.success("Contact Message submitted successfully!");
      clearData(); // ✅ reset form
    } catch (error) {
      console.error("Error submitting contact Message:", error);
      toast.error("Failed to submit contact Message. Please try again.");
    }
  };

  return (
    <>
      <HeroSection
        title="Contact Us"
        description="Have questions or want to book us for your next event? Reach out to us through the form below or find our contact details and location."
        image="/images/setup1.jpg"
        height="h-[70vh]"
      />

      <div className="bg-[#f8f9fa] min-h-screen font-sans">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={Data.name}
                onChange={(e) =>
                  setData({ name: e.target.value })
                }
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                value={Data.email}
                onChange={(e) =>
                  setData({ email: e.target.value })
                }
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                value={Data.subject}
                onChange={(e) =>
                  setData({ subject: e.target.value })
                }
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                rows={6}
                placeholder="Message"
                value={Data.message}
                onChange={(e) =>
                  setData({ message: e.target.value })
                }
                className="w-full p-3 border rounded-xl resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#e9bc66] hover:bg-[#d4a373] text-white font-bold py-3 px-8 rounded-xl"
            >
              Send Message
            </button>
          </form>

          {/* RIGHT SIDE (UNCHANGED) */}
          <div className="space-y-8">
            <div>
              <span className="text-[#d4a373] italic font-serif text-lg">
                Contact Us
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Get In Touch
              </h1>
              <p className="text-gray-500 text-sm">
                Reach out to us anytime!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Phone size={28} />
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <a href="tel:+233544620083">+233 54 462 0083</a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={28} />
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p>abigailyankey1992@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin size={28} />
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p>Tema Community 5, Ghana</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <div key={i}>
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;