import { motion } from 'framer-motion';
import ChevronPattern from './ChevronPattern';
import { Users, Handshake } from 'lucide-react';
import imageOne from '../assets/volunteers-1.jpg';
import imageTwo from '../assets/volunteers-2.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 max-w-6xl mx-auto border-t border-brand-greyLight/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Vision Text */}
        <motion.div 
          className="lg:col-span-5 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-brand-dark font-heading tracking-wide">
            Empowering Through Service
          </h2>
          <div className="space-y-4 text-brand-dark/80 font-light text-sm md:text-base leading-relaxed font-body">
            <p>
              <b>ADEN VOLUNTEER NETWORK (AVN)</b> is a youth-led initiative that bridges passionate young talent with non-governmental organizations and civil society projects across Aden. By streamlining deployment, delivering capacity-building guidance, and promoting civic engagement.
            </p>
            <p>
              AVN empowers local youth to gain real-world experience while driving meaningful, measurable community development and social impact.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Asymmetric Photo/Avatar Grid */}
        <motion.div 
          className="lg:col-span-7 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Top-Left Photo */}
          <div className="rounded-xl overflow-hidden h-44 shadow-sm border border-brand-greyLight">
            <img 
              src={imageOne} 
              alt="Volunteers discussing document plans" 
              className="w-full h-full object-cover  sepia-[25%] contrast-[105%]"
            />
          </div>

          {/* Top-Right Photo */}
          <div className="rounded-xl overflow-hidden h-44 shadow-sm border border-brand-greyLight">
            <img 
              src={imageTwo} 
              alt="Youth working at computer workstation" 
              className="w-full h-full object-cover sepia-[25%] contrast-[105%]"
            />
          </div>

          {/* Bottom-Left: Pattern + Line Icon Box */}
          <div className="relative rounded-xl overflow-hidden h-48 bg-brand-cream border border-brand-greyLight p-4 flex flex-col justify-center items-center text-center">
            <ChevronPattern color="#D25327" opacity={0.25} className="absolute inset-0" />
            <div className="relative z-10 flex gap-4 text-brand-orange">
              <Users size={32} />
              <Handshake size={32} />
            </div>
            <p className="relative z-10 mt-3 text-xs font-bold uppercase text-brand-dark tracking-wider font-heading">
              Community Spirit
            </p>
          </div>

          {/* Bottom-Right: Avatar Cards */}
          <div className="grid grid-cols-2 gap-2 h-48">
            <div className="bg-brand-peach/30 rounded-xl p-3 flex flex-col items-center justify-center text-center border border-brand-peach/50">
              <div className="w-12 h-12 bg-brand-dark/10 rounded-full flex items-center justify-center text-brand-dark mb-2">
                <Users size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase text-brand-dark font-heading">COMMUNITY</span>
              <span className="text-[9px] text-brand-dark/70 font-light leading-tight mt-1">Portrait placeholder in spirit</span>
            </div>

            <div className="bg-brand-sage/30 rounded-xl p-3 flex flex-col items-center justify-center text-center border border-brand-sage/50">
              <div className="w-12 h-12 bg-brand-dark/10 rounded-full flex items-center justify-center text-brand-dark mb-2">
                <Users size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase text-brand-dark font-heading">YOUTH</span>
              <span className="text-[9px] text-brand-dark/70 font-light leading-tight mt-1">Portrait placeholder in spirit</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}