import trainerIcon from "@/assets/trainer-icon.png";
import equipmentIcon from "@/assets/equipment-icon.png";
import nutritionIcon from "@/assets/nutrition-icon.png";

const Services = () => {
  const services = [
    {
      icon: trainerIcon,
      title: "Professional Training",
      description: "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
      features: ["Personal Training", "Group Sessions", "Skill Development"]
    },
    {
      icon: equipmentIcon,
      title: "Modern Equipment",
      description: "With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
      features: ["Latest Machines", "Free Weights", "Cardio Equipment"]
    },
    {
      icon: nutritionIcon,
      title: "Nutrition Guidance",
      description: "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
      features: ["Meal Planning", "Nutrition Coaching", "Supplement Advice"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive fitness solutions tailored to your individual needs and goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-3d p-8 text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;