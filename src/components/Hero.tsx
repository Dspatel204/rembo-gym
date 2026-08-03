import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const typingPhrases = ["STRONGER", "LEANER", "MORE CONFIDENT"];

const Hero = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const blink = window.setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 500);
    return () => window.clearInterval(blink);
  }, []);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex % typingPhrases.length];
    const delay = !isDeleting && text === currentPhrase ? 1400 : isDeleting ? 60 : 120;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && text.length < currentPhrase.length) {
        setText(currentPhrase.slice(0, text.length + 1));
      } else if (!isDeleting && text === currentPhrase) {
        setIsDeleting(true);
      } else if (isDeleting && text.length > 0) {
        setText(currentPhrase.slice(0, text.length - 1));
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => prev + 1);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-muscular-man-working-out-at-the-gym-5719-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-video-overlay absolute inset-0" />
        <div className="absolute inset-0 hero-3d-layer pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white mb-6 animate-fade-in-down">
            <span className="animate-pulse-slow mr-2 h-2 w-2 rounded-full bg-primary"></span>
            ✨ Professional Fitness Training
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            MAKE YOUR BODY
            <br />
            <span className="text-gradient">FIT & PERFECT</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto">
            Transform your life with our professional trainers, modern equipment, 
            and personalized fitness programs designed for your success.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="btn-3d group">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="group border-white/20 text-white hover:bg-white/10">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "500+", label: "Happy Members" },
              { number: "50+", label: "Expert Trainers" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="card-3d p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
