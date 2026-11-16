import { motion, useInView } from "framer-motion";
import { useRef, Suspense } from "react";
import {
  GraduationCap,
  Calendar,
  Award,
  UserCheck,
  Cpu,
  Cloud,
  Code2,
  Workflow,
  BookOpen,
} from "lucide-react";
import { FloatingCube } from "./FloatingCube";
import { education, personalInfo } from "@/data/personalData";

const engineeringPillars = [
  {
    icon: Code2,
    title: "Full-Stack Java & APIs",
    desc: "Spring Boot, PostgreSQL, MS Graph, JUnit & JSP",
  },
  {
    icon: Cloud,
    title: "AWS Cloud & Infra Ops",
    desc: "EC2, S3, RDS, ACM, CloudWatch & OS Patching",
  },
  {
    icon: Workflow,
    title: "Automation & Observability",
    desc: "Octopus Runbooks, Grafana, JS7 & Shell Scripts",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const [bachelors, ...schooling] = education;

  return (
    <section id="about" className="py-24 relative scroll-mt-24 overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">
            <UserCheck className="w-3.5 h-3.5" />
            Profile &amp; Academic Foundation
          </span>
          <h2 className="section-heading mb-0">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left: Open 3D Tech Core + Engineering Narrative (Unboxed) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Open 3D Canvas with Ambient Glow + Engineering Pillars */}
            <div className="grid sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 relative h-52 sm:h-56 flex items-center justify-center">
                <div className="absolute inset-4 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                  }
                >
                  <FloatingCube />
                </Suspense>
              </div>

              <div className="sm:col-span-7 space-y-3">
                {engineeringPillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors border-l-2 border-primary/60"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <pillar.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-foreground">
                        {pillar.title}
                      </h4>
                      <p className="text-xs font-mono text-muted-foreground mt-0.5">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Clean Typographic Bio (No heavy stacked box) */}
            <div className="space-y-4 pt-4 border-t border-border/60">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {personalInfo.aboutText1}
              </p>
              <p
                className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                dangerouslySetInnerHTML={{ __html: personalInfo.aboutText2 }}
              />
            </div>
          </motion.div>

          {/* Right: Modern Tech-Oriented Education Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold font-display flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                Education
              </h3>
              <span className="text-xs font-mono text-muted-foreground">
                Computer Engineering
              </span>
            </div>

            {/* Featured Primary Degree */}
            {bachelors && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-card/90 via-card/70 to-primary/5 border border-primary/30 shadow-lg overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {bachelors.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/25">
                    <Award className="w-3.5 h-3.5" />
                    {bachelors.score} • {bachelors.percentage}
                  </span>
                </div>

                <h4 className="text-xl font-bold font-display text-foreground mb-1">
                  {bachelors.degree}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {bachelors.institution}
                </p>

                {/* Animated CGPA Visual Progress Bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-[11px] font-mono text-muted-foreground mb-1.5">
                    <span>Academic Performance Index</span>
                    <span className="text-primary font-semibold">8.89 / 10.0</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "88.9%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                      className="h-full rounded-full gradient-bg"
                    />
                  </div>
                </div>

                {/* Core CS & Tech Focus Tags */}
                {bachelors.coursework && (
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-primary" />
                      Core CS &amp; Technical Focus
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {bachelors.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-secondary/80 border border-border/60 text-foreground/90"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Compact Unboxed Secondary Schooling Milestones */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              {schooling.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.4 + idx * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/35 border-l-2 border-primary/50 hover:bg-secondary/55 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono text-primary inline-flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {edu.year}
                    </span>
                    <span className="text-xs font-mono font-semibold text-accent">
                      {edu.score}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold font-display text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {edu.institution}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
