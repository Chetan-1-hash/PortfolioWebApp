import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/personalData";

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="achievements"
      className="py-24 relative scroll-mt-24 overflow-hidden"
    >
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-badge">
            <Trophy className="w-3.5 h-3.5" />
            Publications &amp; Innovation
          </span>
          <h2 className="section-heading mb-0">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="tech-surface p-7 hover-lift text-center group"
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 mx-auto mb-5 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/20"
              >
                <achievement.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="text-lg font-bold font-display mb-3 group-hover:gradient-text transition-all">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
