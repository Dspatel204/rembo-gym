import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Professional Trainers",
      description: "Certified experts with years of experience"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Modern Equipment",
      description: "State-of-the-art fitness machines and tools"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Personalized Programs",
      description: "Customized workout plans for your goals"
    }
  ];

  const achievements = [
    "500+ Satisfied Members",
    "50+ Expert Trainers",
    "5+ Years of Excellence",
    "24/7 Gym Access"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Take Your Health & Body to the 
              <span className="text-gradient"> Next Level</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your fitness journey with our comprehensive program designed 
              to help you reach your goals. We combine professional expertise, 
              modern equipment, and personalized attention to deliver results.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement}
                  className="flex items-center space-x-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="xl">
              Take a Tour
            </Button>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-3d p-6 flex items-start space-x-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;