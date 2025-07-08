import { Button } from "@/components/ui/button";
import { Clock, Users, Calendar } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      name: "Strength Training",
      time: "Monday: 6:00AM - 7:00AM",
      instructor: "Mike Johnson",
      participants: "8-12",
      difficulty: "Intermediate",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Yoga & Meditation",
      time: "Tuesday: 7:00AM - 8:00AM",
      instructor: "Sarah Wilson",
      participants: "10-15",
      difficulty: "Beginner",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "HIIT Cardio",
      time: "Wednesday: 6:30PM - 7:30PM",
      instructor: "David Chen",
      participants: "6-10",
      difficulty: "Advanced",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "CrossFit",
      time: "Thursday: 5:00PM - 6:00PM",
      instructor: "Emma Davis",
      participants: "8-12",
      difficulty: "Advanced",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Boxing",
      time: "Friday: 7:00PM - 8:00PM",
      instructor: "Alex Rodriguez",
      participants: "6-8",
      difficulty: "Intermediate",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Pilates",
      time: "Saturday: 9:00AM - 10:00AM",
      instructor: "Lisa Thompson",
      participants: "10-15",
      difficulty: "Beginner",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="classes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Classes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our expertly designed fitness classes for all skill levels. 
            Get stronger, healthier, and more confident with our diverse programs.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {classes.map((classItem, index) => (
            <div
              key={classItem.name}
              className="card-3d overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${classItem.color} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{classItem.name}</h3>
                  <span className="text-sm opacity-90">{classItem.difficulty}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{classItem.participants} participants</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Instructor: {classItem.instructor}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                  Book Class
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card-3d p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Fitness Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of members who have transformed their lives through our programs.
            </p>
            <Button variant="hero" size="xl">
              View All Classes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;