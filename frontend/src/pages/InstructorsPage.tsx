import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, CheckCircle } from "lucide-react";

export default function InstructorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Meet Our Instructor
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn from a certified professional dedicated to your success
            </p>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-3xl">J Atwal</CardTitle>
                <CardDescription className="text-lg">
                  Professional Driving Instructor
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold">
                      Qualifications & Experience:
                    </span>
                  </div>
                  <ul className="space-y-2 ml-7">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Reliable and experienced driving instructor
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Holds Class 1 license
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Previously TransLink Bus Driver.
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Fully qualified and certified instructor
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Extensive experience in driver education
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Professional Instruction You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn from an instructor committed to your success and safety
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Fully Certified</h3>
                <p className="text-muted-foreground">
                  Our instructor holds all current certifications and maintains
                  the highest professional standards to ensure your safety and
                  success.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">
                  Patient & Professional
                </h3>
                <p className="text-muted-foreground">
                  With a patient teaching style and professional approach,
                  you'll feel comfortable and confident throughout your learning
                  journey.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">
                  Extensive Experience
                </h3>
                <p className="text-muted-foreground">
                  Benefit from years of driving experience and expertise,
                  including advanced qualifications in commercial vehicle
                  operation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">
                  Personalized Approach
                </h3>
                <p className="text-muted-foreground">
                  Each lesson is tailored to your individual learning pace and
                  comfort level, ensuring you get the most out of every session.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
