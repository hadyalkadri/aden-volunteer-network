
import { motion } from 'framer-motion';
import ChevronPattern from './ChevronPattern';
import Logo from './Logo';
import { Search, ClipboardList, MapPin } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "MEAL & DATA ENTRY",
      headerBg: "bg-brand-orange",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "REPORTING & ADMIN",
      headerBg: "bg-brand-sage",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "FIELD & LOGISTICS SUPPORT",
      headerBg: "bg-brand-navy",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "DIGITAL & MEDIA",
      headerBg: "bg-brand-dark",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto border-t border-brand-greyLight/60">
      
      {/* Header Row */}
      <div className="flex justify-between items-center mb-8">
    
    

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-brand-dark tracking-wide font-heading">
            PROJECTS
          </h2>
        </div>
        
      </div>

      {/* Info Block */}
      <div className="bg-brand-cream border border-brand-greyLight rounded-xl p-6 mb-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 text-sm md:text-base text-brand-dark/80 font-light leading-relaxed font-body">
          Our Volunteer Network is designed to create structured community projects. We match teams to specific sector portfolios according to local need and organizational capacity.
        </div>
        <div className="md:col-span-4 flex items-center justify-around bg-brand-peach/20 p-4 rounded-lg border border-brand-peach/40">
          <div className="flex gap-2 text-brand-dark">
            <ClipboardList size={42} />
            <Search size={42} />
            <MapPin size={42} />
          </div>
          <Logo width="w-[80px]" className="rounded-xl" />
        </div>
      </div>

      <div className="relative">

        {/* Decorative Chevron Pattern */}
        <div className="absolute -top-6 -right-8 w-48 h-20 z-0 pointer-events-none">
          <ChevronPattern color="#334B68" opacity={0.12} />
        </div>

        {/* Project Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl overflow-hidden border border-brand-dark/40 shadow-sm bg-white hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top Accent Bar with Pattern */}
              <div className={`h-10 ${project.headerBg} relative overflow-hidden`}>
                <ChevronPattern color="#FFFFFF" opacity={0.25} />
              </div>

              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-stone-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Title Footer */}
              <div className="py-4 px-4 text-center bg-brand-cream border-t border-brand-greyLight">
                <h3 className="text-base font-bold text-brand-dark uppercase tracking-wider font-heading">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}