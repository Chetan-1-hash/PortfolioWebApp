import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, Code, CheckCircle2, Clock } from "lucide-react";
import { experience, TCS_START_DATE } from "@/data/personalData";
import { calculateExperienceDuration, formatMonthYear } from "@/lib/utils";

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const tcsDuration = calculateExperienceDuration(TCS_START_DATE);

  return (
    <section
      id="experience"
      className="py-24 relative bg-secondary/25 scroll-mt-24 overflow-hidden"
    >
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-badge">
            <Briefcase className="w-3.5 h-3.5" />
            Career &amp; Operations
          </span>
          <h2 className="section-heading mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-2 rounded-full bg-card/80 border border-border/70 text-sm font-mono shadow-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">TCS Total Experience:</span>
            <span className="font-semibold text-foreground">
              {tcsDuration.label}
            </span>
            <span className="text-xs text-muted-foreground">
              (Since 6 Feb 2025 • Auto-updated)
            </span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 relative">
          {experience.map((item, index) => {
            const dynamicDuration = item.startDate
              ? calculateExperienceDuration(item.startDate, item.endDate)
              : null;
            const periodText = item.startDate
              ? `${formatMonthYear(item.startDate)} – ${
                  item.endDate ? formatMonthYear(item.endDate) : "Present"
                }`
              : item.periodLabel;

            return (
              <motion.div
                key={`${item.companyName}-${item.position}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
                className={`tech-surface p-6 sm:p-8 relative overflow-hidden ${
                  item.isCurrent ? "border-primary/40 shadow-primary/5" : ""
                }`}
              >
                {item.isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
                )}

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Company Logo */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-background/90 border border-border/70 p-2.5 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <img
                      src={item.logo}
                      alt={item.companyName}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 w-full">
                    {/* Position + Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold font-display">
                          {item.position}
                        </h3>
                        <span className="px-3 py-0.5 text-xs font-semibold gradient-bg text-primary-foreground rounded-full">
                          {item.type}
                        </span>
                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Company + Dynamic Duration */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground mb-5">
                      <span className="flex items-center gap-2 font-medium text-foreground/90">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {item.companyName}
                      </span>

                      {periodText && (
                        <span className="flex items-center gap-2 font-mono text-xs sm:text-sm">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{periodText}</span>
                          {dynamicDuration && (
                            <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary font-semibold border border-primary/20">
                              {dynamicDuration.label}
                            </span>
                          )}
                        </span>
                      )}
                    </div>

                    {/* Highlight Metrics (if any) */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Responsibilities */}
                    <div className="space-y-3.5 mb-7">
                      {item.experience.map((detail, idx) => (
                        <motion.div
                          key={detail.label}
                          initial={{ opacity: 0, x: -16 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.2 + idx * 0.07,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            <span className="text-foreground font-semibold">
                              {detail.label}:{" "}
                            </span>
                            {detail.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        Technologies &amp; Tools Used
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-mono bg-secondary/80 border border-border/70 rounded-lg font-medium text-foreground/90 hover:border-primary/50 hover:text-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
