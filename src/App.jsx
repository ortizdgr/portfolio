import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Phone, MapPin, Rocket, Code2, Layers, Boxes } from 'lucide-react'

// ======= CONFIG EDITABLE =======
const INFO = {
  name: 'Myriam Ortiz',
  title: 'Ingeniera en Computación e Informática — Frontend / UI',
  location: 'Santiago, Chile',
  email: 'ortiz.dgr@gmail.com',
  phone: '+56 9 4423 3619',
  github: 'https://github.com/ortizdgr',
  linkedin: 'https://www.linkedin.com/in/ortizdgr',
  cvUrl: '/cv-myriam-ortiz.pdf',
  bio: 'Desarrolladora frontend con base en diseño. Trabajo con React, Vite y Tailwind; integro servicios backend (Firebase, APIs REST) y aplico accesibilidad y usabilidad para crear interfaces modernas y escalables.',
}

const SKILLS = {
  Lenguajes: ['JavaScript (ES6+)', 'TypeScript (aprendiendo)', 'HTML5', 'CSS3'],
  Frontend: ['React', 'Vite', 'React Router', 'Zustand', 'Tailwind CSS', 'Recharts'],
  'Backend & BBDD': ['Firebase (Auth/Firestore/Storage)', 'APIs REST', 'Node.js (básico)', 'SQL (CRUD/joins)'],
  Herramientas: ['Git/GitHub', 'Postman', 'VSCode', 'Figma'],
  Testing: ['Jest', 'React Testing Library'],
  UX: ['Accesibilidad (WCAG)', 'Usabilidad', 'Atomic Design'],
}

const PROJECTS = [
  {
    title: 'Kanban Dashboard',
    desc: 'Tablero Kanban con estado global (Zustand), gráfico de progreso (Recharts) y accesibilidad.',
    tech: ['React', 'Vite', 'Tailwind', 'Zustand', 'Recharts', 'Vitest'],
    repo: 'https://github.com/ortizdgr/react-kanban-dashboard',
    demo: '#',
  },
  {
    title: 'Startup Dashboard (WIP)',
    desc: 'Frontend con filtros, tablas y formularios accesibles. Preparado para consumir API y escribir pruebas.',
    tech: ['React', 'Tailwind', 'Jest', 'RTL'],
    repo: 'https://github.com/ortizdgr/startup-dashboard-react',
    demo: '#',
  },
  {
    title: 'Startup API (WIP)',
    desc: 'API REST con Node + SQL, CRUD de tareas/usuarios y colección de Postman.',
    tech: ['Node.js', 'Express', 'PostgreSQL/MySQL'],
    repo: 'https://github.com/ortizdgr/startup-api',
    demo: '#',
  },
]
// ======= END CONFIG =======

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`sticky top-0 z-50 bg-white/70 backdrop-blur border-b ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container flex items-center justify-between py-3">
        <a href="#hero" className="font-semibold">Myriam Ortiz</a>
        <nav className="hidden md:flex gap-6 text-sm" aria-label="Navegación principal">
          <a href="#projects" className="hover:underline">Proyectos</a>
          <a href="#skills" className="hover:underline">Habilidades</a>
          <a href="#contact" className="hover:underline">Contacto</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href={INFO.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg border"><Github size={18} /></a>
          <a aria-label="LinkedIn" href={INFO.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg border"><Linkedin size={18} /></a>
          <a aria-label="Descargar CV" href={INFO.cvUrl} className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white"><Download size={16}/>CV</a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="container py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className="text-3xl md:text-5xl font-extrabold leading-tight">
            {INFO.name}
          </motion.h1>
          <p className="mt-2 text-slate-600">{INFO.title}</p>
          <p className="mt-6 text-slate-700 leading-relaxed">{INFO.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="badge"><MapPin className="inline w-3 mr-1"/>{INFO.location}</span>
            <a className="badge" href={`mailto:${INFO.email}`}><Mail className="inline w-3 mr-1"/> Email</a>
            <a className="badge" href={`tel:${INFO.phone}`}><Phone className="inline w-3 mr-1"/> Llamar</a>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-xl bg-black text-white inline-flex items-center gap-2"><Rocket size={16}/> Ver proyectos</a>
            <a href={INFO.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border inline-flex items-center gap-2"><Github size={16}/> GitHub</a>
          </div>
        </div>
        <div className="p-6 card">
          <h3 className="font-semibold mb-3 flex items-center gap-2"><Code2 size={18}/> Lo que hago</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Frontend con React + Vite + Tailwind</li>
            <li>• Integración con APIs REST / Firebase</li>
            <li>• UI/UX con accesibilidad y diseño de interfaces</li>
            <li>• Tests con Jest/RTL y flujo ágil (Kanban)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="container py-12" aria-labelledby="projects-title">
      <div className="flex items-center gap-3 mb-6"><Layers className="w-5"/><h2 id="projects-title" className="text-xl md:text-2xl font-bold">Proyectos</h2></div>
      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <article key={i} className="card p-5 flex flex-col">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map(t => <span key={t} className="text-xs bg-slate-100 border rounded px-2 py-1">{t}</span>)}
            </div>
            <div className="mt-4 flex gap-3">
              <a className="px-3 py-2 rounded-lg border inline-flex items-center gap-2" href={p.repo} target="_blank" rel="noreferrer"><Github size={16}/> Repo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="container py-12" aria-labelledby="skills-title">
      <div className="flex items-center gap-3 mb-6"><Boxes className="w-5"/><h2 id="skills-title" className="text-xl md:text-2xl font-bold">Habilidades</h2></div>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group} className="card p-5">
            <h3 className="font-semibold mb-3">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(s => <span key={s} className="text-xs bg-slate-100 border rounded px-2 py-1">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="container py-12" aria-labelledby="contact-title">
      <div className="flex items-center gap-3 mb-6"><Mail className="w-5"/><h2 id="contact-title" className="text-xl md:text-2xl font-bold">Contacto</h2></div>
      <div className="card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="font-semibold">¿Hablamos de tu proyecto o una oportunidad laboral?</p>
          <p className="text-slate-600 text-sm">Respondo rápido y puedo compartir demo y repos.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a className="px-4 py-2 rounded-xl bg-black text-white inline-flex items-center gap-2" href={`mailto:${INFO.email}`}><Mail size={16}/> Escribirme</a>
          <a className="px-4 py-2 rounded-xl border inline-flex items-center gap-2" href={INFO.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
          <a className="px-4 py-2 rounded-xl border inline-flex items-center gap-2" href={INFO.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <footer className="container py-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} {INFO.name}. Construido con React + Tailwind.</footer>
    </div>
  )
}
