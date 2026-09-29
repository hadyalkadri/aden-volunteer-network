import { useState } from 'react';
import { MapPin, MessageSquare, Users,  } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

export default function ContactAndSocial() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-16 px-16 sm:px-20 md:px-28 max-w-6xl mx-auto border-t border-brand-greyLight">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column: Form */}
        <div className="md:col-span-7">
          <h2 className="text-2xl font-bold uppercase text-brand-dark mb-6 tracking-wide font-heading">
            CONTACT US
          </h2>

          {submitted && (
            <div className="mb-4 p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-md text-xs font-semibold">
              Thank you for reaching out! We will contact you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full max-w-sm bg-transparent border border-brand-dark/40 rounded-md p-3 text-sm text-brand-dark outline-none focus:border-brand-orange transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full max-w-sm bg-transparent border border-brand-dark/40 rounded-md p-3 text-sm text-brand-dark outline-none focus:border-brand-orange transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full max-w-sm bg-transparent border border-brand-dark/40 rounded-md p-3 text-sm text-brand-dark outline-none focus:border-brand-orange transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-brand-dark text-white rounded-full px-8 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-brand-orange transition-colors cursor-pointer font-heading"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Right Column: Social & Info */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold uppercase text-brand-dark mb-6 tracking-wide font-heading">
              SOCIAL
            </h2>

            {/* Line Art Icons */}
            <div className="flex items-center justify-between max-w-xs mb-6 text-brand-dark">
              <div className="flex flex-col items-center gap-1">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                  <MapPin size={48} />
                </div>
                <span className="text-xs font-medium font-body">Map</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                  <MessageSquare size={48} />
                </div>
                <span className="text-xs font-medium font-body">Messages</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                  <Users size={48} />
                </div>
                <span className="text-xs font-medium font-body">Team</span>
              </div>
            </div>
            <div className='px-2'>
              <p className="text-s text-brand-dark/100 font-normal font-body mb-4">
                Contact information:
              </p>
              <div className="px-1">
                <p className="text-xs text-brand-dark/70 font-normal font-body mb-2">aden.volunteer.network@gmail.com</p>
                <p className="text-xs text-brand-dark/70 font-normal font-body mb-2">+967 774 585 750</p>
                <p className="text-xs text-brand-dark/70 font-normal font-body mb-2">Aden, Yemen</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-brand-dark">
            <a href="#facebook" className="p-2 border border-brand-dark/30 rounded-full bg-gray-800 text-white hover:text-brand-orange hover:border-brand-orange transition-colors">
              <FaFacebookF className="text-[18px] md:text-[28px]" />
            </a>
            <a href="#instagram" className="p-2 border border-brand-dark/30 rounded-full bg-gray-800 text-white hover:text-brand-orange hover:border-brand-orange transition-colors">
              <FaInstagram className="text-[18px] md:text-[28px]" />
            </a>
            <a href="#twitter" className="p-2 border border-brand-dark/30 rounded-full bg-gray-800 text-white hover:text-brand-orange hover:border-brand-orange transition-colors">
              <FaTwitter className="text-[18px] md:text-[28px]" />
            </a>
            <a href="#youtube" className="p-2 border border-brand-dark/30 rounded-full bg-gray-800 text-white hover:text-brand-orange hover:border-brand-orange transition-colors">
              <FaYoutube className="text-[18px] md:text-[28px]" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}