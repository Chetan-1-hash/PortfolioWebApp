import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "@/data/personalData";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="projects"
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
            <FolderGit2 className="w-3.5 h-3.5" />
            Featured Work
          </span>
          <h2 className="section-heading mb-3">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Full-stack applications built with Spring Boot, React, Angular, and
            modern databases.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            const hasLiveLink =
              Boolean(project.liveLink) && project.liveLink !== "#";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className={`group ${isFeatured ? "md:col-span-2" : ""}`}
              >
                <div
                  className={`tech-surface overflow-hidden hover-lift h-full ${
                    isFeatured ? "grid md:grid-cols-12" : "flex flex-col"
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`relative overflow-hidden ${
                      isFeatured ? "md:col-span-7 h-56 md:h-full min-h-[240px]" : "h-52"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-70" />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-background/75 backdrop-blur-sm opacity-0 group-hover:opacity-100">
                      {project.upcoming ? (
                        <span className="text-sm sm:text-base font-mono font-bold tracking-wider text-primary border-2 border-primary px-5 py-2 rounded-full uppercase">
                          In Development
                        </span>
                      ) : (
                        <div className="flex gap-3">
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.12 }}
                            whileTap={{ scale: 0.92 }}
                            aria-label={`${project.title} GitHub repository`}
                            className="p-3 rounded-full glass-card hover:border-primary/60 hover:text-primary transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>

                          {hasLiveLink && (
                            <motion.a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.12 }}
                              whileTap={{ scale: 0.92 }}
                              aria-label={`${project.title} live preview`}
                              className="p-3 rounded-full glass-card hover:border-primary/60 hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </motion.a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div
                    className={`p-6 flex flex-col justify-between ${
                      isFeatured ? "md:col-span-5 sm:p-8" : "flex-1"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.upcoming && (
                          <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-primary/15 text-primary border border-primary/30">
                            Upcoming
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
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
