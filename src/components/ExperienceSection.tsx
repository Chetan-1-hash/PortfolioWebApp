import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, Database, Monitor } from "lucide-react";
import { experience, personalInfo } from "@/data/personalData";

const technologies = ["Java Swing", "MySQL", "Eclipse IDE"];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {experience.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover-lift mb-8"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Company Logo */}
                <div className="w-20 h-20 rounded-xl bg-card flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.companyName}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  {/* Position + Type */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold font-display">
                      {item.position}
                    </h3>

                    <span className="px-3 py-1 text-sm gradient-bg text-primary-foreground rounded-full">
                      {item.type}
                    </span>
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {item.companyName}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-4 mb-6">
                    {item.experience.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">{detail}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-primary" />
                      Technologies Used
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-sm bg-secondary rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
