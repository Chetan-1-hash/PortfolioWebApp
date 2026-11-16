import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Layers,
  Terminal,
  Workflow,
  Activity,
  ShieldCheck,
  Globe,
} from "lucide-react";
import {
  skills,
  skillCategories,
  type SkillCategory,
  type SkillItem,
} from "@/data/personalData";

const categoryIcons: Record<SkillCategory | "All", React.ElementType> = {
  All: Layers,
  "Backend & APIs": Code2,
  "Cloud & DevOps": Cloud,
  "Automation & Monitoring": Workflow,
  Databases: Database,
  Frontend: Globe,
};

const SkillBadgeIcon = ({ skill }: { skill: SkillItem }) => {
  const [imgError, setImgError] = useState(false);

  if (skill.name === "GitHub") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-foreground"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }

  if (skill.icon && !imgError) {
    return (
      <img
        src={skill.icon}
        alt={skill.name}
        onError={() => setImgError(true)}
        className={`w-9 h-9 object-contain ${
          skill.name === "AWS" ? "dark:brightness-110" : ""
        }`}
        loading="lazy"
      />
    );
  }

  // Bespoke crisp icons for specialized enterprise/cloud tools
  const fallbackMap: Record<string, React.ElementType> = {
    "Octopus Deploy": Workflow,
    "MS Graph": Globe,
    JSP: FileCode2,
    "REST API": Code2,
    "Sumo Logic": Activity,
    JS7: Cpu,
    ServiceNow: ShieldCheck,
    AWS: Cloud,
    "Shell Script": Terminal,
    Git: GitBranch,
  };

  const FallbackIcon = fallbackMap[skill.name] || Code2;

  return (
    <FallbackIcon
      className="w-7 h-7"
      style={{ color: skill.accentColor || "hsl(var(--primary))" }}
    />
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<
    SkillCategory | "All"
  >("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  const filterTabs: Array<SkillCategory | "All"> = ["All", ...skillCategories];

  return (
    <section
      id="skills"
      className="py-24 relative bg-secondary/25 scroll-mt-24 overflow-hidden"
    >
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="section-badge">
            <Cpu className="w-3.5 h-3.5" />
            Tech Stack &amp; Ecosystem
          </span>
          <h2 className="section-heading mb-3">
            Tools &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Production-tested stack spanning backend Java/Spring Boot, AWS Cloud
            operations, observability &amp; runbook automation, databases, and
            modern frontend frameworks.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filterTabs.map((category) => {
            const Icon = categoryIcons[category];
            const count =
              category === "All"
                ? skills.length
                : skills.filter((s) => s.category === category).length;
            const active = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  active
                    ? "gradient-bg text-primary-foreground border-transparent shadow-md shadow-primary/20"
                    : "bg-card/80 text-muted-foreground border-border/70 hover:text-foreground hover:border-primary/40"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{category}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                    active
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.03, 0.35),
              }}
              whileHover={{ y: -4 }}
              className="tech-surface p-4 flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/70 border border-border/60 flex items-center justify-center group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300">
                <SkillBadgeIcon skill={skill} />
              </div>

              <div className="space-y-0.5">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                {skill.subtitle && (
                  <p className="text-[11px] font-mono text-muted-foreground">
                    {skill.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
