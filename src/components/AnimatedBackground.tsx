import { Dumbbell, Zap, Target, Activity } from "lucide-react";

const equipmentConfig = [
  { Icon: Dumbbell, size: 22, position: "top-[15%] left-[8%]", delay: "0s", duration: "28s" },
  { Icon: Dumbbell, size: 18, position: "top-[60%] right-[10%]", delay: "6s", duration: "35s" },
  { Icon: Zap, size: 20, position: "bottom-[25%] left-[15%]", delay: "4s", duration: "25s" },
  { Icon: Target, size: 26, position: "top-[35%] right-[12%]", delay: "8s", duration: "30s" },
  { Icon: Activity, size: 28, position: "bottom-[40%] left-[40%]", delay: "2s", duration: "22s" },
  { Icon: Dumbbell, size: 16, position: "bottom-[15%] right-[30%]", delay: "5s", duration: "32s" },
  { Icon: Target, size: 20, position: "top-[75%] left-[45%]", delay: "7s", duration: "27s" },
  { Icon: Zap, size: 24, position: "top-[20%] left-[60%]", delay: "3s", duration: "26s" },
];

const particlePositions = [
  { x: 12, y: 18, size: 1, delay: 0.3, duration: 4 },
  { x: 28, y: 42, size: 2, delay: 1.2, duration: 3.5 },
  { x: 45, y: 15, size: 1, delay: 0.8, duration: 4.2 },
  { x: 62, y: 55, size: 2, delay: 1.8, duration: 3.8 },
  { x: 78, y: 22, size: 1, delay: 0.5, duration: 3.3 },
  { x: 15, y: 72, size: 2, delay: 2.1, duration: 4.5 },
  { x: 55, y: 80, size: 1, delay: 1.5, duration: 3.7 },
  { x: 85, y: 48, size: 2, delay: 0.9, duration: 4.1 },
  { x: 38, y: 65, size: 1, delay: 2.4, duration: 3.4 },
  { x: 70, y: 12, size: 1, delay: 1.1, duration: 3.9 },
  { x: 22, y: 35, size: 2, delay: 1.7, duration: 4.3 },
  { x: 92, y: 68, size: 1, delay: 2.0, duration: 3.6 },
  { x: 50, y: 10, size: 1, delay: 0.4, duration: 4.4 },
  { x: 68, y: 78, size: 2, delay: 1.9, duration: 3.2 },
  { x: 33, y: 5, size: 1, delay: 1.3, duration: 4.6 },
];

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/6 to-accent/6 rounded-full blur-3xl animate-pulse-slow [animation-duration:10s]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent/6 to-primary/6 rounded-full blur-3xl animate-pulse-slow [animation-duration:12s]" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-primary/4 to-transparent rounded-full blur-3xl animate-pulse-slow [animation-duration:15s]" style={{ animationDelay: "4s" }} />

      {/* Floating Gym Equipment */}
      {equipmentConfig.map(({ Icon, size, position, delay, duration }) => (
        <div
          key={position}
          className={`absolute ${position} opacity-[0.05] animate-drift-slow`}
          style={{ animationDelay: delay, animationDuration: duration }}
        >
          <Icon className="text-primary" style={{ width: size, height: size }} />
        </div>
      ))}

      {/* Subtle Particle Dots */}
      {particlePositions.map((p, i) => (
        <div
          key={`particle-${i}`}
          className="absolute bg-foreground/20 rounded-full animate-pulse-slow"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
