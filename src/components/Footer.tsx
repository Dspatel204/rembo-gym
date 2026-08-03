import { Dumbbell, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Youtube className="h-5 w-5" />, href: "#" },
  ];

  const footerSections = [
    {
      title: "Quick Links",
      links: ["Home", "About", "Services", "Classes", "Contact"]
    },
    {
      title: "Services",
      links: ["Personal Training", "Group Classes", "Nutrition", "Online Coaching", "Supplements"]
    },
    {
      title: "Classes",
      links: ["Strength Training", "Yoga", "HIIT Cardio", "CrossFit", "Boxing", "Pilates"]
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-primary animate-rotate-slow [animation-duration:15s]" />
              <span className="text-2xl font-bold text-gradient"> Gym</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform your life with our professional trainers, modern equipment, 
              and personalized fitness programs. Your journey to a healthier you starts here.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground p-2 rounded-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="animate-fade-in"
              style={{ animationDelay: `${(sectionIndex + 1) * 0.1}s` }}
            >
              <h3 className="font-bold mb-4 text-gradient">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={link} style={{ animationDelay: `${(sectionIndex + 1) * 0.1 + linkIndex * 0.05}s` }} className="animate-slide-in-left">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in">
          <p className="text-muted-foreground text-sm">
            © 2024 rembo family Gym. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-y-[-2px]">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-y-[-2px]">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-y-[-2px]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;