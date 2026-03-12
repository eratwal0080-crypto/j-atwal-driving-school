import { Card, CardContent } from "@/components/ui/card";
import { Award, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Quality driving instruction focused on your success
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2025, J Atwal Driving School began with a simple
                mission: to provide high-quality, personalized driving
                instruction that empowers students to become safe and confident
                drivers.
              </p>
              <p>
                We focus on delivering exceptional, student-centered instruction
                tailored to each individual's learning style and pace. Our
                approach emphasizes building genuine confidence behind the wheel
                through patient, supportive teaching methods.
              </p>
              <p>
                At J Atwal Driving School, we believe that every student
                deserves personalized attention and a learning environment where
                they can thrive. Our commitment is to help you achieve your
                driving goals with confidence and competence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Teaching Philosophy</h2>
            <p className="text-lg text-muted-foreground">
              We believe that learning to drive should be a positive, empowering
              experience built on trust, patience, and proven teaching methods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Student-Centered Approach
                  </h3>
                  <p className="text-muted-foreground">
                    We tailor our instruction to each student's learning style,
                    pace, and comfort level, ensuring everyone receives the
                    support they need.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Safety First</h3>
                  <p className="text-muted-foreground">
                    Safety is our top priority. We emphasize defensive driving
                    techniques and real-world hazard awareness in every lesson.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Personalized Lessons
                  </h3>
                  <p className="text-muted-foreground">
                    Every lesson is customized to your specific needs and goals,
                    helping you progress at a comfortable pace while building
                    real-world driving skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
