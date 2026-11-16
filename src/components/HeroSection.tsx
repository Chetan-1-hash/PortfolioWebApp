import { personalInfo, socialLinks, TCS_START_DATE } from "@/data/personalData";
import { calculateExperienceDuration, scrollToSection } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  Cloud,
  Code2,
  Workflow,
  Activity,
  Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";

const coreStack = [
  "Spring Boot",
  "AWS",
  "PostgreSQL",
  "Octopus Deploy",
  "MS Graph",
  "Grafana",
  "React",
];

const floatingNodes = [
  {
    icon: Cloud,
    title: "AWS Cloud",
    subtitle: "EC2 • S3 • RDS • CW",
    position: "top-4 -left-2 sm:left-0",
    delay: 0,
    duration: 4.5,
  },
  {
    icon: Code2,
    title: "Spring Boot",
    subtitle: "Java • PostgreSQL • JUnit",
    position: "top-8 -right-2 sm:right-0",
    delay: 0.6,
    duration: 5.2,
  },
  {
    icon: Workflow,
    title: "Octopus & JS7",
    subtitle: "Runbook Automation",
    position: "bottom-20 -left-3 sm:-left-2",
    delay: 1.1,
    duration: 4.8,
  },
  {
    icon: Activity,
    title: "2,500+ Tickets",
    subtitle: "Grafana • Sumo Logic",
    position: "bottom-16 -right-3 sm:-right-2",
    delay: 0.3,
    duration: 5.5,
  },
];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tcsDuration = calculateExperienceDuration(TCS_START_DATE);

  // Subtle interactive mouse parallax for the orbital visual
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const portraitX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const portraitY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const nodesX = useTransform(springX, [-0.5, 0.5], [16, -16]);
  const nodesY = useTransform(springY, [-0.5, 0.5], [16, -16]);

  const handleVisualMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleVisualMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
          }
        }
      },
      isDeleting ? 45 : 85
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16"
    >
      {/* Engineering Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/3 -right-1/4 w-[620px] h-[620px] bg-gradient-to-br from-primary/20 to-accent/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/3 -left-1/4 w-[580px] h-[580px] bg-gradient-to-tr from-accent/15 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-card/80 border border-border/80 backdrop-blur-md text-xs sm:text-sm font-mono mb-6 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-foreground/90">
                System Engineer @{" "}
                <span className="text-primary font-semibold">TCS</span>
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{tcsDuration.label}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight mb-4 leading-[1.05]"
            >
              <span className="gradient-text">CHETAN</span>{" "}
              <span className="text-foreground">CHOPADE</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg sm:text-2xl text-muted-foreground mb-5 min-h-[2rem] font-mono"
            >
              <span className="text-primary/80">&gt; </span>
              <span className="text-foreground font-semibold">
                {displayText}
                <span className="animate-pulse text-primary">_</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-7 leading-relaxed text-base sm:text-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Core Stack Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-secondary/80 border border-border/70 text-foreground/90 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons + Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 gradient-bg text-primary-foreground rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>

              <motion.button
                type="button"
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 glass-card rounded-xl font-semibold flex items-center gap-2 hover:border-primary/50 hover:glow transition-all"
              >
                <Mail className="w-4 h-4 text-primary" />
                Contact Me
              </motion.button>

              <div className="flex items-center gap-2.5 ml-0 sm:ml-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    className="p-3 glass-card rounded-xl hover:border-primary/50 hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Orbital Tech Composition (Borderless Full-Portrait & Animated) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            onMouseMove={handleVisualMouseMove}
            onMouseLeave={handleVisualMouseLeave}
            className="lg:col-span-5 relative flex items-center justify-center py-4"
          >
            <div className="relative w-[340px] h-[400px] sm:w-[440px] sm:h-[460px] flex items-center justify-center">
              {/* Soft Ambient Aura */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/15 blur-3xl pointer-events-none"
              />

              {/* Outer Rotating Dashed Orbit Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
                className="absolute w-[315px] h-[315px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-primary/25 pointer-events-none"
              >
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent/80" />
              </motion.div>

              {/* Inner Counter-Rotating Orbit Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute w-[255px] h-[255px] sm:w-[330px] sm:h-[330px] rounded-full border border-border/50 pointer-events-none"
              >
                <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              </motion.div>

              {/* Center Circular Portrait (No Orange Border, Full Upper-Body Framing) */}
              <motion.div
                style={{ x: portraitX, y: portraitY }}
                className="relative z-10 -mt-3"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10"
                >
                  <img
                    src={personalInfo.profileImage}
                    alt="Chetan Chopade"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
              </motion.div>

              {/* Orbiting Floating Tech Stack Nodes */}
              <motion.div
                style={{ x: nodesX, y: nodesY }}
                className="absolute inset-0 z-20 pointer-events-none"
              >
                {floatingNodes.map((node) => (
                  <motion.div
                    key={node.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -7, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: 0.4 + node.delay * 0.3 },
                      scale: { duration: 0.5, delay: 0.4 + node.delay * 0.3 },
                      y: {
                        duration: node.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: node.delay,
                      },
                    }}
                    className={`absolute ${node.position} pointer-events-auto`}
                  >
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-card/85 backdrop-blur-xl border border-border/70 shadow-xl hover:border-primary/50 hover:scale-105 transition-all duration-300">
                      <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                        <node.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-xs font-bold font-display text-foreground whitespace-nowrap">
                          {node.title}
                        </p>
                        <p className="text-[10px] font-mono text-muted-foreground whitespace-nowrap">
                          {node.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating Identity Anchor Pill at Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/90 backdrop-blur-xl border border-border/80 shadow-xl whitespace-nowrap">
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold font-display">
                    Chetan Chopade
                  </span>
                  <span className="text-border">•</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground">
                    <MapPin className="w-3 h-3 text-primary" />
                    Pune, IN
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/60 rounded-full flex justify-center p-1 hover:border-primary transition-colors"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.button>
    </section>
  );
};
