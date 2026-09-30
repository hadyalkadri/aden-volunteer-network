import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronPattern from './ChevronPattern';
import { Calendar, Users, ArrowUpRight, HeartHandshake, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Open Volunteer Call & Skill Roster",
    category: "Volunteer Mobilization",
    status: "Active",
    headerBg: "bg-brand-orange",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    summary: "Recruiting and onboarding motivated youth, recent graduates, and local professionals into an agile standby roster for rapid deployment across upcoming field surveys, community outreach, and administrative support.",
    metrics: [{ label: "Target Districts", value: "4" }, { label: "Duration", value: "6 Wks" }, { label: "Capacity", value: "50" }],
    timeline: "Oct 2026 – Present",
    openRoles: "MEAL Support & Data Entry Volunteers",
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdcuQc1AazTAv_PE6fVppn5ycyiLc1TR9Rp96eH2fP4YWsKEA/viewform" // <-- Replace with your link
  },
  {
    id: 2,
    title: "Community Needs Survey Campaign",
    category: "Field Assessment",
    status: "Active",
    headerBg: "bg-brand-navy",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
    summary: "The objective is to conduct rapid household surveys and focus group discussions across targeted districts to identify critical humanitarian needs and establish accurate beneficiary databases for future relief interventions",
    metrics: [{ label: "Target Households", value: "500+" }, { label: "Enumerators", value: "20" }, { label: "Districts", value: "4" }],
    timeline: "Oct 2026 – Present",
    openRoles: "Future Cohort Field Enumerators",
    googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID_2/viewform" // <-- Replace with your link
  }
];

// Fallback Google Form link if a project doesn't specify one
const DEFAULT_GOOGLE_FORM = "https://docs.google.com/forms/d/e/YOUR_GENERAL_GOOGLE_FORM_ID/viewform";

export default function ProjectsSpotlight() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featured = projects[featuredIndex];

  // Active Google Form URL for selected project
  const activeFormUrl = featured.googleFormUrl || DEFAULT_GOOGLE_FORM;

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6 max-w-6xl mx-auto border-t border-brand-greyLight/60"
    >
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-orange font-heading block mb-1">
          Our Impact
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-brand-dark tracking-wide font-heading">
          PROJECTS & INITIATIVES
        </h2>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Featured Project (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-brand-dark/30 overflow-hidden shadow-sm min-h-[280px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={featured.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {/* Card Header Banner */}
              <div className={`h-10 ${featured.headerBg} relative overflow-hidden flex items-center justify-between px-4`}>
                <ChevronPattern color="#FFFFFF" opacity={0.25} />
                <span className="relative z-10 text-[10px] font-bold uppercase text-white font-heading tracking-wider">
                  Featured • {featured.category}
                </span>
                <span className="relative z-10 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-white/20 text-white">
                  {featured.status}
                </span>
              </div>

              {/* Card Main Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-brand-dark/60 font-body mb-2">
                  <Calendar size={14} /> <span>{featured.timeline}</span>
                </div>
                <h3 className="text-xl font-extrabold uppercase text-brand-dark font-heading mb-3">
                  {featured.title}
                </h3>
                <p className="text-sm text-brand-dark/80 font-light leading-relaxed font-body mb-6">
                  {featured.summary}
                </p>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 p-3 bg-brand-cream border border-brand-greyLight rounded-lg">
                  {featured.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm font-bold text-brand-dark font-heading">{m.value}</div>
                      <div className="text-[10px] uppercase text-brand-dark/60 font-body">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Project Selection Queue (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark/60 font-heading">
            Select a Project
          </h4>

          {projects.map((proj, idx) => {
            const isSelected = featuredIndex === idx;

            return (
              <motion.div
                key={proj.id}
                onClick={() => setFeaturedIndex(idx)}
                whileHover={{ x: isSelected ? 0 : 4 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl border transition-colors duration-200 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "bg-brand-cream border-brand-orange shadow-sm"
                    : "bg-white border-brand-greyLight hover:border-brand-dark/40 opacity-75 hover:opacity-100"
                }`}
              >
                {/* Active Indicator Line on Card Left Edge */}
                {isSelected && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="flex justify-between items-center mb-1 pl-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange font-heading">
                    {proj.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-brand-dark/50 font-heading">
                    {proj.status}
                  </span>
                </div>
                <h5 className="text-sm font-extrabold text-brand-dark uppercase font-heading pl-1">
                  {proj.title}
                </h5>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* NEW: Volunteer Recruitment Banner (Placed right below grid) */}
      {/* ============================================================ */}
          <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 rounded-xl bg-brand-navy text-white p-6 md:p-8 relative overflow-hidden shadow-md border border-brand-dark/20"
      >
        {/* 1. Chevron Background Pattern (Behind everything) */}
        <ChevronPattern
          color="#FFFFFF"
          opacity={0.08}
          className="absolute inset-0 z-0 pointer-events-none"
        />

        {/* 2. Ambient Orange Glow Effect */}
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-brand-orange/15 rounded-full blur-2xl pointer-events-none z-0" />

        {/* 3. Foreground Content Layer (On top of background) */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-[11px] font-bold uppercase tracking-wider font-heading">
              <HeartHandshake size={14} className="shrink-0" />
              <span>Join Our Mission</span>
            </div>

            {/* Title dynamically changes with active project */}
            <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide font-heading text-white">
              Register for <span className="text-brand-orange">{featured.title}</span>
            </h3>

            {/* Description */}
            <p className="text-sm font-light text-white/85 font-body leading-relaxed">
              {featured.status === "Active"
                ? `We are currently recruiting volunteers for roles such as "${featured.openRoles}". Gain real-world experience and serve your community.`
                : `Want to participate in future initiatives like "${featured.title}"? Submit your details to join our general volunteer roster.`}
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="flex items-center gap-1.5 text-[11px] font-body text-white/90 bg-white/10 px-2.5 py-1 rounded-md">
                <CheckCircle2 size={13} className="text-brand-orange" />
                NGO Certification
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-body text-white/90 bg-white/10 px-2.5 py-1 rounded-md">
                <CheckCircle2 size={13} className="text-brand-orange" />
                Hands-on Fieldwork
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-body text-white/90 bg-white/10 px-2.5 py-1 rounded-md">
                <Users size={13} className="text-brand-orange" />
                Mentorship & Network
              </span>
            </div>
          </div>

          {/* CTA Link Button to Google Form */}
          <div className="shrink-0 pt-2 lg:pt-0">
            <a
              href={activeFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-white text-xs font-bold uppercase font-heading tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] group"
            >
              <span>Apply via Google Form</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}