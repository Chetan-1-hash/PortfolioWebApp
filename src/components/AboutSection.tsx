import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, Suspense } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { FloatingCube } from "./FloatingCube";
import { education, personalInfo } from "@/data/personalData";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-center">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content with 3D Model */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Profile Image & 3D Model Container */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Profile Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={personalInfo.developerPortrait}
                      alt="Chetan Chopade - Developer"
                      className="max-w-full max-h-full object-contain object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* 3D Model */}
                <div className="h-64 rounded-xl overflow-hidden bg-background/50">
                  <Suspense fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                  }>
                    <FloatingCube />
                  </Suspense>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.aboutText1}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4"
                dangerouslySetInnerHTML={{ __html: personalInfo.aboutText2 }}
              >
              </p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-display flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Education
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary glow" />
                  
                  <div className="glass-card p-6 rounded-xl hover-lift">
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </div>
                    <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-accent font-medium">{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
