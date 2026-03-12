import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Car, CheckCircle, Clock, MapPin, Shield, Users } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from certified professionals with years of teaching experience",
    },
    {
      icon: Car,
      title: "Modern Vehicles",
      description:
        "Practice in well-maintained, safe, and comfortable vehicles",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book lessons at times that work best for your schedule",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Comprehensive safety training and defensive driving techniques",
    },
    {
      icon: CheckCircle,
      title: "Affordable Packages",
      description: "Competitive pricing with flexible payment options",
    },
  ];

  const areasServed = [
    "Cloverdale",
    "Surrey",
    "Delta",
    "Fleetwood",
    "Guilford",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-driving-lesson.dim_1200x600.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Learn to Drive with Confidence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
            Professional driving instruction for students of all levels. Start
            your journey to becoming a safe and confident driver today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="text-lg px-8 py-6">
                Book Your First Lesson
              </Button>
            </Link>
            <Link to="/sessions">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Areas We Serve</h2>
            </div>
            <p className="text-muted-foreground">
              Providing quality driving instruction across the Lower Mainland
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {areasServed.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-background border rounded-lg px-5 py-3 shadow-sm"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-semibold">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose J Atwal Driving School?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality driving education
              with a focus on safety, confidence, and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-2 hover:border-primary transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Start Your Driving Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your first lesson today and take the first step towards driving
            independence.
          </p>
          <Link to="/booking">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Schedule a Lesson Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
