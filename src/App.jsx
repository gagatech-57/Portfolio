import { useState, useEffect, useRef } from "react";
import { Mail, ExternalLink, Code2, Database, Wrench, Terminal, Cpu, FileJson, FileCode, Atom, Server, Globe, GitBranch, Send } from "lucide-react";

function Github({ size = 20, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function Linkedin({ size = 20, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  );
}

const GITHUB_USERNAME = "gagatech-57";

const SKILLS = {
  Frontend: {
    icon: <Code2 size={18} className="text-indigo-400" />,
    items: [
      { name: "HTML5", icon: <Code2 size={12} /> },
      { name: "CSS3", icon: <FileCode size={12} /> },
      { name: "JavaScript (ES6+)", icon: <Terminal size={12} /> },
      { name: "React.js", icon: <Atom size={12} /> }
    ],
    accentClass: "border-indigo-500/20 text-indigo-400 bg-indigo-500/5",
  },
  Backend: {
    icon: <Terminal size={18} className="text-cyan-400" />,
    items: [
      { name: "Node.js", icon: <Cpu size={12} /> },
      { name: "Express.js", icon: <Server size={12} /> },
      { name: "REST API", icon: <Globe size={12} /> }
    ],
    accentClass: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5",
  },
  Database: {
    icon: <Database size={18} className="text-emerald-400" />,
    items: [
      { name: "MongoDB", icon: <Database size={12} /> }
    ],
    accentClass: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
  },
  Tools: {
    icon: <Wrench size={18} className="text-violet-400" />,
    items: [
      { name: "Git", icon: <GitBranch size={12} /> },
      { name: "GitHub", icon: <Github size={12} /> },
      { name: "VS Code", icon: <Terminal size={12} /> },
      { name: "Postman", icon: <Send size={12} /> }
    ],
    accentClass: "border-violet-500/20 text-violet-400 bg-violet-500/5",
  },
};

const LEARNING = [
  "Advanced React",
  "Backend Development",
  "JWT Authentication",
  "MongoDB Atlas",
  "Render & Vercel Deployment",
];

const JOURNEY = [
  {
    year: "2023",
    title: "Started B.Sc Computer Science",
    desc: "Began my academic journey, developing core problem-solving mindsets and learning programming fundamentals.",
    icon: <Cpu size={16} className="text-indigo-400" />,
  },
  {
    year: "2024",
    title: "Entering Frontend Space",
    desc: "Mastered HTML, CSS, and modern JavaScript. Started building styled interfaces using React.",
    icon: <Code2 size={16} className="text-cyan-400" />,
  },
  {
    year: "2025",
    title: "MERN Stack Specialization",
    desc: "Learned server-side development, database schemas, JWT, and deployment systems (Vercel/Render).",
    icon: <Database size={16} className="text-emerald-400" />,
  },
  {
    year: "2026",
    title: "Full-Stack Graduation & Roles",
    desc: "Completing B.Sc degree. Seeking MERN developer positions and internships to build commercial systems.",
    icon: <Terminal size={16} className="text-violet-400" />,
  },
];

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let particles = [];
    const particleCount = 50;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 0.6;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(129, 140, 248, 0.25)";
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = "rgba(99, 102, 241, 0.035)";
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}

function SectionTitle({ index, title }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono text-cyan-400 text-sm tracking-wider font-semibold">
        // {index}.
      </span>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-slate-800 via-slate-900 to-transparent" />
    </div>
  );
}

function ProjectSkeleton() {
  return (
    <div className="glass-card rounded-xl p-6 border border-slate-800/80 space-y-4">
      <div className="flex justify-between items-center">
        <div className="h-5 w-2/3 rounded-md skeleton-shimmer" />
        <div className="h-4 w-4 rounded-md skeleton-shimmer" />
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full rounded-md skeleton-shimmer" />
        <div className="h-4 w-4/5 rounded-md skeleton-shimmer" />
      </div>
      <div className="flex gap-4 pt-4">
        <div className="h-4 w-16 rounded-full skeleton-shimmer" />
        <div className="h-4 w-12 rounded-full skeleton-shimmer" />
      </div>
    </div>
  );
}

function WorkstationMockup() {
  const [activeTab, setActiveTab] = useState("terminal");
  const [lines, setLines] = useState([]);
  
  const codeLines = [
    { type: "input", text: "npm run deploy" },
    { type: "output", text: "Building application packages..." },
    { type: "output", text: "Deploying production build to gunasekar.dev..." },
    { type: "input", text: "ping -c 3 api.gunasekar.dev" },
    { type: "output", text: "64 bytes from 104.21.68.99: icmp_seq=1 ttl=56 time=18.4 ms" },
    { type: "output", text: "64 bytes from 104.21.68.99: icmp_seq=2 ttl=56 time=19.2 ms" },
    { type: "output", text: "System is online and running successfully." }
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        const nextLine = codeLines[currentLine];
        setLines((prev) => [...prev, nextLine]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 850);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel rounded-xl overflow-hidden border border-white/[0.05] shadow-2xl flex flex-col w-full">
      {/* Tabs list */}
      <div className="bg-[#0b0922]/80 px-4 pt-3 flex items-center gap-1.5 border-b border-white/[0.04] justify-between">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg font-mono text-xs border-t border-x transition-colors duration-200 ${
              activeTab === "terminal"
                ? "bg-[#030014]/40 border-white/[0.05] text-cyan-400 font-semibold"
                : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <Terminal size={12} /> terminal.sh
          </button>
          <button
            onClick={() => setActiveTab("json")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg font-mono text-xs border-t border-x transition-colors duration-200 ${
              activeTab === "json"
                ? "bg-[#030014]/40 border-white/[0.05] text-indigo-400 font-semibold"
                : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <FileJson size={12} /> profile.json
          </button>
          <button
            onClick={() => setActiveTab("css")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg font-mono text-xs border-t border-x transition-colors duration-200 ${
              activeTab === "css"
                ? "bg-[#030014]/40 border-white/[0.05] text-emerald-400 font-semibold"
                : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <FileCode size={12} /> developer.css
          </button>
        </div>
        <div className="flex items-center gap-1 mb-2">
          <span className="w-2 h-2 rounded-full bg-rose-500/80" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
      </div>

      {/* Tabs contents */}
      <div className="p-5 min-h-[220px] bg-[#030014]/20 overflow-x-auto leading-relaxed select-text font-mono text-xs">
        {activeTab === "terminal" && (
          <div className="space-y-2">
            {lines.map((line, idx) => (
              <div key={idx} className="whitespace-pre">
                {line.type === "input" ? (
                  <span className="text-cyan-400">
                    <span className="text-slate-600 font-semibold">~ </span>
                    {line.text}
                  </span>
                ) : (
                  <span className="text-slate-300">{line.text}</span>
                )}
              </div>
            ))}
            {lines.length < codeLines.length && (
              <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-pulse ml-1 align-middle" />
            )}
          </div>
        )}

        {activeTab === "json" && (
          <pre className="text-indigo-300">
            {JSON.stringify(
              {
                name: "Gunasekar",
                role: "MERN Stack Web Developer",
                education: "B.Sc Computer Science",
                year: "3rd Year Student",
                hobbies: ["Building Apps", "Problem Solving", "Tech Research"],
              },
              null,
              2
            )}
          </pre>
        )}

        {activeTab === "css" && (
          <pre className="text-emerald-300">
{`.developer {
  background: var(--mern-stack-gradient);
  speed-of-learning: ultra-fast;
  focus: clean-functional-design;
  collaboration: open-to-learn;
}

#portfolio-redesign {
  animation: wow-effect 3s forwards;
}`}
          </pre>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const updateMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load repos");
        return res.json();
      })
      .then((data) => {
        const cleaned = Array.isArray(data)
          ? data
              .filter((r) => !r.fork)
              .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          : [];
        setRepos(cleaned);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-200 font-sans overflow-x-hidden selection:bg-indigo-500/30 selection:text-white">
      {/* Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* Background Interactive mouse glow */}
      <div
        className="cursor-glow-element hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          opacity: opacity,
        }}
      />

      {/* Cosmic background orbs */}
      <div className="absolute top-1/6 left-1/10 w-96 h-96 rounded-full bg-indigo-700/10 blur-[120px] animate-drift pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/10 w-[450px] h-[450px] rounded-full bg-cyan-600/5 blur-[150px] animate-drift-reverse pointer-events-none z-0" />

      {/* Grid overlay */}
      <div className="grid-bg z-0" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030014]/65 border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="group font-mono text-lg text-cyan-400 font-bold tracking-tight">
            gunasekar<span className="text-indigo-400 group-hover:text-cyan-300 transition-colors">.dev</span>
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors relative py-1 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#journey" className="hover:text-cyan-400 transition-colors relative py-1 group">
              Journey
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors relative py-1 group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors relative py-1 group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors relative py-1 group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="max-w-5xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-mono text-xs tracking-wider animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Available for Internships
            </div>
            <div className="space-y-2">
              <p className="font-mono text-cyan-400 text-sm tracking-widest font-semibold">
                HI, MY NAME IS
              </p>
              <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
                Gunasekar.
              </h1>
              <h2 className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-400 via-indigo-300 to-cyan-400 leading-tight">
                I build MERN stack web apps.
              </h2>
            </div>
            <p className="max-w-xl text-slate-400 leading-relaxed text-base sm:text-lg">
              B.Sc Computer Science student from Tamil Nadu, India, focused on
              crafting clean, dynamic, and full-stack solutions with React, Node.js, Express, and MongoDB.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="btn-primary-glow px-7 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2"
              >
                Explore Projects
              </a>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-lg border border-slate-800 bg-slate-950/40 text-slate-300 font-semibold text-sm hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2.5"
              >
                <Github size={18} /> GitHub Profile
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/[0.04] bg-[#0c0a21]/50 group animate-float">
              <img
                src="/hero-illustration.png"
                alt="Programming illustration"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />
            </div>
            <WorkstationMockup />
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900/60">
          <SectionTitle index="01" title="About Me" />
          <div className="grid md:grid-cols-5 gap-10 mt-8">
            <div className="md:col-span-3 text-slate-400 leading-relaxed space-y-5 text-base">
              <p>
                I'm a passionate self-taught MERN Stack Developer currently pursuing my B.Sc in Computer
                Science (3rd Year). My journey into web development began with curiosity about how complex
                systems are wired from end to end.
              </p>
              <p>
                Since then, I've loved building robust server architectures, organizing schema structures, and 
                designing intuitive, interactive interfaces. I aim to write clean, semantic code that delivers
                excellent user experiences.
              </p>
              <p>
                Right now, I am expanding my skills in core backend systems (JWT, MongoDB Atlas, API design) and 
                aim to launch my career as a full-time Software Engineer.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="glass-card rounded-xl p-6 border border-slate-800/80 space-y-4">
                <h4 className="font-mono text-cyan-400 text-xs tracking-wider uppercase font-semibold">
                  Quick Details
                </h4>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-500">Degree</span>
                    <span className="text-slate-300 text-right">B.Sc Computer Science</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-500">Year</span>
                    <span className="text-slate-300 text-right">3rd Year</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-500">Location</span>
                    <span className="text-slate-300 text-right">Tamil Nadu, India</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">Focus</span>
                    <span className="text-cyan-400 text-right">MERN / Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline Section */}
        <section id="journey" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900/60">
          <SectionTitle index="02" title="Academic & Coding Journey" />
          <div className="relative mt-12 pl-10 md:pl-0">
            <div className="timeline-track" />
            <div className="space-y-12">
              {JOURNEY.map((item, idx) => (
                <div key={idx} className="relative md:flex md:justify-between items-center w-full">
                  <div className="hidden md:block w-[45%]" />
                  <div className="absolute left-[-30px] md:left-[50%] md:translate-x-[-50%] flex items-center justify-center w-8 h-8 rounded-full bg-[#0d0b28] border border-white/[0.08] shadow-lg z-10">
                    {item.icon}
                  </div>
                  <div className="glass-card rounded-xl p-6 border border-slate-800/80 md:w-[45%]">
                    <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-200 mt-1">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900/60">
          <SectionTitle index="03" title="Skills & Tools" />
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {Object.entries(SKILLS).map(([group, data]) => (
              <div
                key={group}
                className="glass-card rounded-xl p-6 border border-slate-800/80 hover:border-slate-700/80"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  {data.icon}
                  <h3 className="text-base font-bold text-slate-200">{group}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {data.items.map((s) => (
                    <span
                      key={s.name}
                      className={`inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full border ${data.accentClass} font-medium`}
                    >
                      {s.icon}
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 glass-card border border-dashed border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
              <span className="animate-pulse w-2 h-2 rounded-full bg-cyan-400" />
              🌱 Currently Learning & Deepening
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {LEARNING.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono bg-cyan-400/5 text-cyan-300 px-3.5 py-1.5 rounded-full border border-cyan-400/10 font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900/60">
          <SectionTitle index="04" title="Featured Projects" />
          <p className="text-slate-400 text-sm -mt-4 mb-8 font-mono">
            // Loaded dynamically from github.com/{GITHUB_USERNAME}
          </p>

          {loading && (
            <div className="grid sm:grid-cols-2 gap-6">
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </div>
          )}

          {error && (
            <div className="glass-card border-dashed border-red-500/20 bg-red-500/5 rounded-xl p-8 text-center text-slate-400 max-w-lg mx-auto">
              <Terminal className="mx-auto text-red-400 mb-3" size={24} />
              <p className="font-mono text-sm">
                Failed to load repositories from GitHub. Please check your network or try refreshing.
              </p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid sm:grid-cols-2 gap-6">
              {repos.slice(0, 6).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group glass-card rounded-xl p-6 border border-slate-800/80 hover:border-indigo-500/40 hover:-translate-y-1 block"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors text-lg tracking-tight">
                      {repo.name}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-sm text-slate-400 mt-3 line-clamp-2 min-h-[2.5rem] leading-relaxed">
                    {repo.description || "No description provided. Click to view repository on GitHub."}
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-900/40 text-xs font-mono text-slate-500">
                    {repo.language && (
                      <span className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
                        <span className="text-slate-400 font-medium">{repo.language}</span>
                      </span>
                    )}
                    <span className="flex items-center gap-1">★ {repo.stargazers_count}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-5xl mx-auto px-6 py-28 border-t border-slate-900/60 text-center">
          <p className="font-mono text-cyan-400 text-sm mb-3 tracking-widest font-semibold uppercase">
            05. What's Next?
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-base leading-relaxed">
            I am actively looking for internship roles or developer opportunities. Whether you
            have a question, want to collaborate, or just say hi, I will get back to you!
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="mailto:gunaknn@gmail.com"
              className="btn-primary-glow px-8 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2.5"
            >
              <Mail size={16} /> Say Hello
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6 text-slate-500">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-800 bg-slate-950/20 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-[#0b0922] transition-all hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-800 bg-slate-950/20 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-[#0b0922] transition-all hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:gunaknn@gmail.com"
              className="p-3 rounded-full border border-slate-800 bg-slate-950/20 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-[#0b0922] transition-all hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>
        </section>

        <footer className="text-center py-8 text-slate-600 text-xs font-mono border-t border-slate-900/60">
          Designed & Built by Gunasekar — 2026
        </footer>
      </div>
    </div>
  );
}