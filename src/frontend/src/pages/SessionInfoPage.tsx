import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Clock, Package } from "lucide-react";

const sessionIncludes = [
  "Certified professional instructor",
  "Modern, well-maintained vehicle",
  "Comprehensive safety training",
  "Defensive driving techniques",
  "Real-world driving scenarios",
  "Progress tracking and feedback",
  "Flexible scheduling options",
  "Pick-up and drop-off service",
];

export default function SessionInfoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Session Information
            </h1>
            <p className="text-xl text-muted-foreground">
              Flexible lesson options to fit your schedule and learning needs
            </p>
          </div>
        </div>
      </section>

      {/* Session Types Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Available Session Types
                </CardTitle>
                <CardDescription className="text-base">
                  We offer three different session durations to accommodate your
                  learning style and schedule
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-muted/50">
                    <Clock className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">30 Minutes</h3>
                    <p className="text-sm text-muted-foreground">
                      Perfect for quick practice sessions or specific skill
                      focus
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-muted/50">
                    <Clock className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">1 Hour</h3>
                    <p className="text-sm text-muted-foreground">
                      Our most popular option for comprehensive lesson coverage
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-muted/50">
                    <Clock className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">2 Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Extended sessions for in-depth practice and skill
                      development
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-center text-muted-foreground">
                    For pricing information and to discuss which session type is
                    right for you, please contact us.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Packages Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Special Packages</CardTitle>
                <CardDescription className="text-base">
                  Driving license packages designed to help you achieve your
                  goals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-background border">
                    <Package className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">2 Lessons</h3>
                    <p className="text-sm text-muted-foreground">
                      Starter package for beginners or refresher training
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-background border">
                    <Package className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">10 Lessons</h3>
                    <p className="text-sm text-muted-foreground">
                      Popular choice for building solid driving foundations
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-background border">
                    <Package className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">20 Lessons</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive training for confident driving skills
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-background border">
                    <Package className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">25 Lessons</h3>
                    <p className="text-sm text-muted-foreground">
                      Extended package for thorough preparation
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-background border">
                    <Package className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">30 Lessons</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete package for maximum practice and confidence
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-center text-muted-foreground">
                    For inquiries about package pricing and details, please
                    contact us.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What's Included in Every Session
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sessionIncludes.map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                For inquiries about pricing and availability, or to book your
                first lesson, please contact us. We're here to help you choose
                the perfect session type for your needs.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
