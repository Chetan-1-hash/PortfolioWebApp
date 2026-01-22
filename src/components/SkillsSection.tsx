import { skills } from "@/data/personalData";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";


export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-center">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 + index * 0.05,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.1,
                y: -10,
              }}
              className="tech-icon flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
