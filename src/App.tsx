/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Circle, Instagram, Facebook, ArrowLeft } from "lucide-react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";

const NAV_LINKS = ["Home", "About", "Projects"];

const SERVICES = [
  { id: "01", title: "Brand Strategy" },
  { id: "02", title: "Brand Identity Design" },
  { id: "03", title: "Packaging Design" },
  { id: "04", title: "Creative Direction" },
];

const PROJECTS = [
  {
    title: "Vortex UI Kit",
    category: "3D Design Sys",
    image: "https://cdn.dribbble.com/userupload/46941222/file/a1bdcd1afaa75adac82b7bdb9ea08778.jpg?resize=1024x768&vertical=center",
  },
  {
    title: "Linear Redesign",
    category: "Product Design",
    image: "https://cdn.dribbble.com/userupload/45732992/file/d1f7b4fac02cc87887f951032c724e1d.jpg?resize=1024x768&vertical=center",
  },
  {
    title: "Loom Web App",
    category: "SaaS Design",
    image: "https://cdn.dribbble.com/userupload/44606970/file/97952afbc6c534a203f3f0972e6a1b26.jpg?resize=1024x768&vertical=center",
  },
  {
    title: "Nexus Dashboard",
    category: "Enterprise UX",
    image: "https://cdn.dribbble.com/userupload/43610357/file/original-c35ee453ae21bc053851dc7bc64b2120.jpg?resize=1600x1200&vertical=center",
  },
];

const TRUST_LOGOS = [
  { name: "Linear", icon: <motion.div className="w-6 h-6 border-b-2 border-r-2 border-current rotate-45" /> },
  { name: "Loom", icon: <Circle className="w-6 h-6" /> },
];

function Home() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8">
        
        {/* HERO SECTION / MAIN CARD */}
        <motion.section 
          id="home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative orange-gradient rounded-[30px] md:rounded-[40px] overflow-hidden orange-glow flex flex-col"
        >
          {/* TOP NAV (Inside Card) */}
          <header className="flex items-center justify-between px-6 py-6 md:px-10 md:py-10 z-20">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-2xl font-bold tracking-tight"
            >
              SellStack<span className="text-white/40">.</span>
            </motion.div>
            
            <div className="flex items-center gap-4 md:gap-10">
              <nav className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link} 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/70 hover:text-white transition-colors font-medium"
                  >
                    {link}
                  </a>
                ))}
              </nav>
              <a 
                href="#contact"
                className="bg-white text-black pl-6 pr-2 py-2 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition-transform"
              >
                Get in touch
                <span className="bg-primary p-2 rounded-full text-white">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </header>

          <div className="relative px-6 pb-12 pt-10 md:px-20 md:pb-24 flex flex-col md:flex-row items-center justify-between z-10 min-h-[500px]">
            {/* Left Column: Typography */}
            <div className="w-full md:w-1/2 space-y-2">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl font-medium text-white/90"
              >
                Hey, I'm a
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-6xl sm:text-7xl lg:text-[110px] font-bold leading-[0.85] tracking-tighter text-white"
              >
                Creative <br /> Director
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/50 max-w-lg pt-6 leading-relaxed font-light"
              >
                Specializing in digital experiences that blend artistic vision with strategic product thinking to help brands tell their most compelling stories.
              </motion.p>
            </div>

            {/* Right Column: Hero Image Container */}
            <div className="w-full md:w-1/2 relative mt-12 md:mt-0 flex justify-center md:justify-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="relative w-[280px] h-[350px] md:w-[450px] md:h-[550px] group"
              >
                {/* Profile Image with Blend Modes */}
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1528" 
                  alt="SellStack Profile"
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl grayscale brightness-75 contrast-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 mix-blend-color rounded-2xl md:rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl md:rounded-3xl"></div>
                
                {/* Floating Quote Over Image Area */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -right-4 top-20 md:-right-20 md:top-32 max-w-[240px] md:max-w-[280px] p-6 text-white backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl"
                >
                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3">
                    Great design should feel invisible.
                  </h3>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed">
                    From logo to language, I build brands that connect and convert.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* BOTTOM SERVICES AREA (Inside Hero Card) */}
          <div className="px-6 py-10 md:px-20 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 bg-black/10 backdrop-blur-sm">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="space-y-2"
              >
                <div className="text-sm font-bold text-white/50">{service.id}</div>
                <div className="text-lg md:text-xl font-bold tracking-tight">{service.title}</div>
              </motion.div>
            ))}
          </div>

          {/* TRUST BAR (Inside Hero Bottom Section) */}
          <div className="w-full bg-bg-inner py-10 md:py-14 border-t border-white/5">
            <div className="px-6 md:px-20 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="text-sm font-semibold tracking-widest text-white/40 uppercase">
                Trusted by Brands I've Helped Shape
              </div>
              <div className="flex flex-wrap items-center gap-10 md:gap-16">
                {TRUST_LOGOS.map((logo) => (
                  <motion.div 
                    key={logo.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    <div className="text-primary">{logo.icon}</div>
                    <span className="text-lg font-bold tracking-tight">{logo.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECOND SECTION: BEHIND THE DESIGNS */}
        <section className="py-24 md:py-40 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
              Behind the Designs
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter">
              Shaping Experiences That Make Life Simpler
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end space-y-12"
          >
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-xl">
              I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a 
                href="#contact"
                className="orange-gradient text-white pl-8 pr-3 py-3 rounded-full font-bold flex items-center gap-4 hover:scale-105 transition-transform group"
              >
                Get in touch
                <span className="bg-white p-2 rounded-full text-black group-hover:rotate-45 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
              
              <div className="space-y-1">
                <p className="text-sm text-white/40 font-medium">Let's Build Something</p>
                <p className="text-sm font-bold">Meaningful Together</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 md:py-40 px-6 md:px-20 bg-bg-inner rounded-[30px] md:rounded-[40px] mb-20 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
                  Sheikh Imaan — The Founder
                </div>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight">
                  Design with <br /> <span className="text-primary">Intention.</span>
                </h2>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <p className="text-2xl md:text-3xl font-medium leading-snug text-white/80">
                With over 2 years of experience, I’ve helped startups and enterprise brands find their voice through digital craftsmanship.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white/60">
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">My Philosophy</h4>
                  <p>I believe that less is only more when more is no longer better. Every pixel must serve a purpose.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">My Process</h4>
                  <p>Strategy driven, research backed, and creatively obsessed. I don't just make things look good; I make them work.</p>
                </div>
              </div>
              
              <div className="flex gap-12 pt-4 flex-wrap">
                <div>
                  <div className="text-4xl font-bold text-white">2+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40">Years Exp.</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">50+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40">Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>



        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 md:py-40 px-6 md:px-20 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
                Selected Works
              </div>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">
                Featured <span className="text-white/20">Projects</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group cursor-pointer ${idx === 0 ? "md:col-span-2 lg:col-span-3" : ""}`}
                onClick={() => navigate(`/project/${idx}`)}
              >
                <div className={`relative ${idx === 0 ? "aspect-[21/9]" : "aspect-[4/5]"} overflow-hidden rounded-[30px] bg-bg-inner border border-white/5 mb-6`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="bg-white text-black p-4 rounded-full">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-primary font-bold text-sm uppercase tracking-widest">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 md:py-32 px-6 md:px-20 bg-bg-inner rounded-[30px] md:rounded-[40px] mb-20 scroll-mt-20 border border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-8"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
                Next Steps
              </div>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                Let's Build <br /> 
                <span className="text-white/20">The Future</span> <br /> 
                Together.
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full max-w-2xl">
                <a 
                  href="mailto:mohammadimaan12@gmail.com" 
                  className="w-full sm:w-auto bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-base md:text-lg font-medium hover:bg-white/10 hover:border-primary/30 transition-all text-white font-sans whitespace-nowrap"
                >
                  mohammadimaan12@gmail.com
                </a>
                <div className="flex gap-4">
                  <a href="https://instagram.com/sellstack.co" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-xl hover:text-primary hover:bg-white/10 transition-all">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://facebook.com/sellstack.co" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-xl hover:text-primary hover:border-primary/30 transition-all">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER AREA / SUBTLE ACCENT */}
        <footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-sm px-6 font-medium">
          <p>© 2026 SellStack. All rights reserved by Sheikh Imaan.</p>
          <div className="flex gap-6">
            <a href="https://instagram.com/sellstack.co" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/sellstack.co" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
  );
}

function ProjectView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS[Number(id)];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/60 hover:text-white mb-12 group transition-colors"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <p className="text-primary font-bold uppercase tracking-widest">{project.category}</p>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">{project.title}</h1>
          </div>
          
          <div className="rounded-[40px] overflow-hidden border border-white/5 bg-bg-inner">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full aspect-video object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="max-w-3xl space-y-6 text-white/60 text-lg leading-relaxed">
            <p>
              Detailed view for {project.title}. This project represents a shift in how digital products are perceived and interacted with. 
              Focused on performance and user-centric design patterns.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark selection:bg-primary/30 selection:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectView />} />
      </Routes>
    </div>
  );
}
