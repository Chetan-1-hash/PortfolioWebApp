import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  "import { AI } from '@neural/network';",
  "const brain = new NeuralNetwork();",
  "brain.train(data, epochs=1000);",
  "await brain.predict(future);",
  "console.log('Hello, World!');",
];

const NeuralNode = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute w-3 h-3 rounded-full bg-primary"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1, 1, 0],
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const NeuralConnection = ({ 
  x1, y1, x2, y2, delay 
}: { 
  x1: number; y1: number; x2: number; y2: number; delay: number 
}) => (
  <motion.svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ zIndex: 0 }}
  >
    <motion.line
      x1={`${x1}%`}
      y1={`${y1}%`}
      x2={`${x2}%`}
      y2={`${y2}%`}
      stroke="hsl(var(--primary))"
      strokeWidth="1"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: [0, 1, 1, 0],
        opacity: [0, 0.5, 0.5, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </motion.svg>
);

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  // Neural network nodes positions (3 layers)
  const nodes = [
    // Input layer
    { x: 20, y: 30 }, { x: 20, y: 50 }, { x: 20, y: 70 },
    // Hidden layer
    { x: 50, y: 25 }, { x: 50, y: 45 }, { x: 50, y: 65 }, { x: 50, y: 85 },
    // Output layer
    { x: 80, y: 40 }, { x: 80, y: 60 },
  ];

  // Connections between layers
  const connections = [
    // Input to hidden
    { x1: 20, y1: 30, x2: 50, y2: 25 }, { x1: 20, y1: 30, x2: 50, y2: 45 },
    { x1: 20, y1: 50, x2: 50, y2: 45 }, { x1: 20, y1: 50, x2: 50, y2: 65 },
    { x1: 20, y1: 70, x2: 50, y2: 65 }, { x1: 20, y1: 70, x2: 50, y2: 85 },
    // Hidden to output
    { x1: 50, y1: 25, x2: 80, y2: 40 }, { x1: 50, y1: 45, x2: 80, y2: 40 },
    { x1: 50, y1: 65, x2: 80, y2: 60 }, { x1: 50, y1: 85, x2: 80, y2: 60 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayedCode(codeLines.slice(0, currentLine).join('\n') + '\n' + line.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setCurrentLine((prev) => prev + 1), 300);
        }
      }, 30);

      return () => clearInterval(typeInterval);
    }
  }, [currentLine]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
      >
        {/* Neural Network Background */}
        <div className="absolute inset-0 opacity-30">
          {connections.map((conn, i) => (
            <NeuralConnection key={`conn-${i}`} {...conn} delay={i * 0.1} />
          ))}
          {nodes.map((node, i) => (
            <NeuralNode key={`node-${i}`} {...node} delay={i * 0.15} />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-6">
          {/* AI Brain Animation */}
          <motion.div
            className="relative w-32 h-32"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Middle ring with gradient */}
            <motion.div
              className="absolute inset-2 rounded-full gradient-border"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner core */}
            <motion.div
              className="absolute inset-4 rounded-full gradient-bg flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 20px hsl(var(--primary) / 0.5)",
                  "0 0 40px hsl(var(--primary) / 0.8)",
                  "0 0 20px hsl(var(--primary) / 0.5)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.span
                className="text-3xl font-bold text-primary-foreground font-display"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                AI
              </motion.span>
            </motion.div>

            {/* Orbiting particles */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-accent"
                style={{
                  left: "50%",
                  top: "50%",
                  marginLeft: "-4px",
                  marginTop: "-4px",
                }}
                animate={{
                  x: [
                    Math.cos((i * Math.PI) / 2) * 50,
                    Math.cos((i * Math.PI) / 2 + Math.PI) * 50,
                    Math.cos((i * Math.PI) / 2) * 50,
                  ],
                  y: [
                    Math.sin((i * Math.PI) / 2) * 50,
                    Math.sin((i * Math.PI) / 2 + Math.PI) * 50,
                    Math.sin((i * Math.PI) / 2) * 50,
                  ],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Code Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-xl p-4 w-full max-w-md font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-3 border-b border-border pb-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-muted-foreground">neural_init.ts</span>
            </div>
            <pre className="text-primary/80 whitespace-pre-wrap min-h-[120px]">
              {displayedCode}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-primary"
              >
                |
              </motion.span>
            </pre>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-full max-w-md">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Initializing neural networks...</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full gradient-bg"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg font-display"
          >
            <span className="gradient-text">Chetan Chopade</span>
          </motion.p>
        </div>

        {/* Floating binary */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-primary/20 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
              }}
              animate={{
                y: ["0vh", "100vh"],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                delay: Math.random() * 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
