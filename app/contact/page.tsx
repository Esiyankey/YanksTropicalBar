'use client';
import {useState} from "react";
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




const ContactPage = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");



 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contactData = {
      name,
      email,
     message,
      subject,
    };
    console.log("Contact Data:", contactData);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();
      console.log("Response from server:", data);
      if (!response.ok) {
        throw new Error(data.message || "Failed to submit Contact Form");
      }
      console.log("Contact submitted successfully:", data);
      toast.success("Contact Message submitted successfully!");
    } catch (error) {
      console.error("Error submitting contact Message:", error);
      toast.error("Failed to submit contact Message. Please try again.");
    }
  };



  return (
    <>
      <HeroSection
        title="Contact Us"
        description="Have questions or want to book us for your next event? Reach out to us through the form below or find our contact details and location. We look forward to hearing from you!"
        image="/images/setup1.jpg"
        height="h-[70vh]"
      />

      <div className="bg-[#f8f9fa] min-h-screen font-sans">
        {/* Top Content Section */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#d4a373] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#d4a373] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#d4a373] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                rows={6}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#d4a373] outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button onClick={handleSubmit} className="bg-[#e9bc66] hover:bg-[#d4a373] text-white font-bold py-3 px-8 rounded-xl shadow-md transition-colors uppercase text-sm tracking-wider">
              Send Message
            </button>
          </div>

          {/* Right: Contact Information */}
          <div className="space-y-8">
            <div>
              <span className="text-[#d4a373] italic font-serif text-lg">
                Contact Us
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Get In Touch
              </h1>
              <p className="text-gray-500 leading-relaxed text-sm">
                Whether you have questions about our services, want to book us
                for an event, or just want to say hello, we &quot;re here to
                help. Fill out the form or use the contact details below to
                reach us. We look forward to connecting with you!
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="text-[#d4a373]">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Call Us</h4>
                  <a href="tel:+233544620083" className="text-gray-500 text-sm">
                    +233 54 462 0083
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-[#d4a373]">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email Us</h4>
                  <p className="text-gray-500 text-sm">
                    abigailyankey1992@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-[#d4a373]">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Address</h4>
                  <p className="text-gray-500 text-sm">
                    Tema Community 5, Ghana
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4">
              <h4 className="font-bold text-gray-800 mb-4">Follow Us On</h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <div
                    key={i}
                    className="bg-[#e9bc66] p-2 rounded-full text-white cursor-pointer hover:scale-110 transition-transform"
                  >
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Map Section */}
        <div className="w-full h-[450px] relative mt-12 grayscale-[0.5] contrast-[1.1]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Tema%20Community%205,%20Ghana&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
