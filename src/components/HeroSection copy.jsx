
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="pt-10 pb-16 px-6 max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight text-brand-dark max-w-4xl mx-auto font-heading">
          Connecting Aden’s Youth With<br />
          <span className="text-brand-orange">Impactful Volunteer Roles</span>
        </h1>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block bg-brand-dark text-white text-xs md:text-sm font-bold uppercase tracking-widest px-10 py-3.5 rounded-full hover:bg-brand-orange transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-heading"
          >
            Apply Now
          </a>
        </div>
      </motion.div>

      {/* Hero Banner Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-12 rounded-2xl overflow-hidden shadow-sm border border-brand-greyLight/80 bg-stone-200"
      >
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80"
          alt="Group of young volunteers in Aden collaborating on community project"
          className="w-full h-[320px] md:h-[460px] object-cover"
        />
      </motion.div>
    </section>
  );
}