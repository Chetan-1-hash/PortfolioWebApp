import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CheckCircle2,
  Globe2,
  Lock,
  MapPin,
  Radio,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const orbitalStages = [
  {
    id: "region",
    icon: MapPin,
    title: "Client Region",
    tag: "GEO",
    threshold: 25,
    position: "top-2 left-0 sm:left-2",
    delay: 0,
    duration: 4.4,
  },
  {
    id: "route",
    icon: Server,
    title: "Edge Node",
    tag: "BOM-IN",
    threshold: 50,
    position: "top-6 right-0 sm:right-2",
    delay: 0.4,
    duration: 5.0,
  },
  {
    id: "secure",
    icon: Lock,
    title: "Session Channel",
    tag: "TLS 1.3",
    threshold: 75,
    position: "bottom-10 left-0 sm:left-2",
    delay: 0.8,
    duration: 4.8,
  },
  {
    id: "mount",
    icon: Sparkles,
    title: "Workspace UI",
    tag: "READY",
    threshold: 100,
    position: "bottom-6 right-0 sm:right-2",
    delay: 0.2,
    duration: 5.3,
  },
];

function getClientRegionLabel(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz.includes("Calcutta") || tz.includes("Kolkata")) {
      return "Pune / India";
    }
    const city = tz.split("/").pop()?.replace(/_/g, " ");
    return city || "Global Edge";
  } catch {
    return "Pune / India";
  }
}

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const sessionId = useMemo(
    () => `SID-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    []
  );
  const clientRegion = useMemo(() => getClientRegionLabel(), []);
  const measuredLatency = useMemo(() => {
    const navEntry = performance.getEntriesByType?.("navigation")?.[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (navEntry && navEntry.responseStart > 0 && navEntry.requestStart > 0) {
      const rtt = Math.round(navEntry.responseStart - navEntry.requestStart);
      if (rtt > 0 && rtt < 500) return rtt;
    }
    return Math.floor(12 + Math.random() * 14);
  }, []);

  // Auto-complete without requiring a submit button
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(100, prev + 2.5);
      });
    }, 52);

    return () => clearInterval(interval);
  }, [onComplete]);

  // 60fps 3D Particle Globe + Curved Telemetry Arc
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let angle = 0;

    const count = 96;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const points = Array.from({ length: count }, (_, i) => {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      return {
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
        isBeacon: i === 24 || i === 58,
      };
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, rect.width * dpr);
      canvas.height = Math.max(1, rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.36;

      ctx.clearRect(0, 0, w, h);

      angle += 0.014;
      const cosY = Math.cos(angle);
      const sinY = Math.sin(angle);
      const tilt = 0.32;
      const cosX = Math.cos(tilt);
      const sinX = Math.sin(tilt);

      const projected = points.map((p) => {
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;
        const scale = 2.6 / (2.6 - z2 * 0.65);
        return {
          x: cx + x1 * radius * scale,
          y: cy + y2 * radius * scale,
          z: z2,
          scale,
          isBeacon: p.isBeacon,
        };
      });

      // Mesh links
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < radius * 0.48) {
            const depth = (projected[i].z + projected[j].z + 2) / 4;
            const alpha = (1 - dist / (radius * 0.48)) * 0.38 * depth;
            ctx.strokeStyle = `rgba(249, 115, 22, ${Math.max(0.03, alpha)})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Telemetry arc between two beacons
      const beacons = projected.filter((p) => p.isBeacon);
      if (beacons.length === 2 && (beacons[0].z > -0.2 || beacons[1].z > -0.2)) {
        const [b1, b2] = beacons;
        const midX = (b1.x + b2.x) / 2;
        const midY = (b1.y + b2.y) / 2 - radius * 0.35;
        ctx.strokeStyle = "rgba(251, 191, 36, 0.8)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(b1.x, b1.y);
        ctx.quadraticCurveTo(midX, midY, b2.x, b2.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Render nodes sorted back-to-front
      projected
        .sort((a, b) => a.z - b.z)
        .forEach((p) => {
          const alpha = 0.25 + ((p.z + 1) / 2) * 0.75;
          if (p.isBeacon && p.z > -0.1) {
            ctx.fillStyle = "rgba(52, 211, 153, 0.95)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4 * p.scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "rgba(52, 211, 153, 0.35)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 7.5 * p.scale, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            ctx.fillStyle =
              p.z > 0.35
                ? `rgba(251, 191, 36, ${alpha})`
                : `rgba(249, 115, 22, ${alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2);
            ctx.fill();
          }
        });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const roundedProgress = Math.round(progress);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 bg-background flex flex-col justify-between overflow-hidden px-6 py-6 sm:px-10 sm:py-8 select-none"
      >
        {/* Engineering Grid + Subtle Radial Glow */}
        <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,hsl(var(--primary)/0.16)_0%,transparent_55%)] pointer-events-none" />

        {/* Top Bar */}
        <div className="relative z-10 max-w-5xl w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-display font-bold text-foreground">
                chetan<span className="gradient-text">.dev</span>
              </p>
              <p className="text-[11px] font-mono text-muted-foreground">
                Portfolio • Edge Runtime
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-card/70 border border-border/70 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              {sessionId}
            </span>
            <button
              type="button"
              onClick={onComplete}
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors px-3 py-1 rounded-md border border-border/60 bg-card/60 cursor-pointer"
            >
              Skip →
            </button>
          </div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 max-w-5xl w-full mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto py-4">
          {/* Left: Headline, Live Telemetry Cards & Auto Progress */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Runtime Telemetry
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
                Initializing{" "}
                <span className="gradient-text">your session</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-2 font-mono">
                {roundedProgress >= 100
                  ? "All systems operational. Entering..."
                  : "Calibrating edge route & interactive modules..."}
              </p>
            </div>

            {/* Telemetry Cards: Location, Latency, Edge Node */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-card/75 border border-border/70 backdrop-blur-md">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground mb-1">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-primary" />
                    Location
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary">
                    TZ
                  </span>
                </div>
                <p className="text-sm font-bold font-display text-foreground truncate">
                  {clientRegion}
                </p>
                <p className="text-[11px] font-mono text-muted-foreground">
                  Client Node
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-card/75 border border-border/70 backdrop-blur-md">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground mb-1">
                  <span className="inline-flex items-center gap-1">
                    <Zap className="w-3 h-3 text-primary" />
                    Latency
                  </span>
                  <span className="flex items-end gap-0.5 h-2.5">
                    <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span className="w-0.5 h-2 bg-emerald-400 rounded-full" />
                    <span className="w-0.5 h-2.5 bg-emerald-400 rounded-full" />
                  </span>
                </div>
                <p className="text-sm font-bold font-mono text-foreground tabular-nums">
                  {measuredLatency}{" "}
                  <span className="text-xs font-normal text-muted-foreground">
                    ms
                  </span>
                </p>
                <p className="text-[10px] font-mono text-emerald-400">
                  ● OPTIMAL
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1 lg:col-span-2 p-3.5 rounded-xl bg-card/75 border border-border/70 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground">
                    <Globe2 className="w-3 h-3 text-primary" />
                    Edge Route
                  </span>
                  <p className="text-sm font-bold font-display text-foreground mt-0.5">
                    IN-WEST • Mumbai (BOM)
                  </p>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  HTTPS • TLS 1.3
                </span>
              </div>
            </div>

            {/* Progress Bar (Auto-completes, no submit button) */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground inline-flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-primary animate-pulse" />
                  {roundedProgress >= 100
                    ? "Session established"
                    : "Auto-entering on completion"}
                </span>
                <span className="text-lg font-bold font-display gradient-text tabular-nums">
                  {roundedProgress}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full gradient-bg rounded-full shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
                  style={{ width: `${roundedProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right: Unboxed 3D Orbital Globe with Floating Handshake Nodes */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="relative w-[320px] h-[340px] sm:w-[430px] sm:h-[390px] flex items-center justify-center">
              {/* Outer Dashed Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-dashed border-primary/30 pointer-events-none"
              >
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent/80" />
              </motion.div>

              {/* Inner Counter-Rotating Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="absolute w-[225px] h-[225px] sm:w-[270px] sm:h-[270px] rounded-full border border-border/70 pointer-events-none"
              >
                <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              </motion.div>

              {/* Center 3D Particle Globe */}
              <div className="relative w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] rounded-full overflow-hidden">
                <canvas ref={canvasRef} className="w-full h-full block" />
              </div>

              {/* 4 Floating Handshake Nodes Orbiting the Globe */}
              {orbitalStages.map((stage, idx) => {
                const isDone = roundedProgress >= stage.threshold;
                const isActive =
                  !isDone &&
                  (idx === 0 ||
                    roundedProgress >= orbitalStages[idx - 1].threshold);

                return (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -6, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.4, delay: idx * 0.1 },
                      scale: { duration: 0.4, delay: idx * 0.1 },
                      y: {
                        duration: stage.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: stage.delay,
                      },
                    }}
                    className={`absolute ${stage.position} z-20`}
                  >
                    <div
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-2xl backdrop-blur-xl border shadow-xl transition-all duration-300 ${isDone
                          ? "bg-card/90 border-emerald-500/40"
                          : isActive
                            ? "bg-card/95 border-primary/60 shadow-primary/15"
                            : "bg-card/75 border-border/60 opacity-75"
                        }`}
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center flex-shrink-0 border ${isDone
                            ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                            : isActive
                              ? "bg-primary/15 border-primary/35 text-primary"
                              : "bg-secondary border-border/60 text-muted-foreground"
                          }`}
                      >
                        <stage.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <div className="leading-tight">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] sm:text-xs font-bold font-display text-foreground whitespace-nowrap">
                            {stage.title}
                          </span>
                          {isDone && (
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                          )}
                        </div>
                        <p
                          className={`text-[10px] font-mono whitespace-nowrap ${isDone
                              ? "text-emerald-400"
                              : isActive
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                        >
                          {stage.tag}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Subtle Footer */}
        <div className="relative z-10 max-w-5xl w-full mx-auto flex items-center justify-between text-[11px] font-mono text-muted-foreground/70">
          <span>CHETAN CHOPADE</span>
          <span>AUTO-HANDSHAKE • LIVE TELEMETRY</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
