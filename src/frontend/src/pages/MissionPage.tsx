import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Shield, Target, TrendingUp, Users } from "lucide-react";

export default function MissionPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We prioritize safety above all else, teaching defensive driving techniques and hazard awareness to ensure our students become responsible drivers.",
    },
    {
      icon: Heart,
      title: "Student-Centered",
      description:
        "Every student learns differently. We adapt our teaching methods to match individual learning styles, ensuring everyone achieves their goals.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "We believe in giving back to our community through free safety workshops, youth programs, and partnerships with local schools.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Excellence",
      description:
        "We constantly improve our curriculum and training methods, staying current with the latest safety standards and teaching techniques.",
    },
    {
      icon: Award,
      title: "Professional Standards",
      description:
        "Our instructor maintains the highest professional certifications and undergoes regular training to deliver exceptional instruction.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering safe, confident drivers through exceptional education
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8 pb-8">
                <div className="text-center space-y-6">
                  <div className="inline-flex p-4 rounded-full bg-primary/10">
                    <Target className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission Statement</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At J Atwal Driving School, our mission is to create safe,
                    confident, and responsible drivers through personalized
                    instruction, proven teaching methods, and an unwavering
                    commitment to road safety. We believe that quality driver
                    education is not just about passing a test, it's about
                    building lifelong skills that protect lives and strengthen
                    communities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Goals</h2>
            <p className="text-lg text-muted-foreground">
              We're committed to achieving these objectives in everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">
                  Reduce Traffic Accidents
                </h3>
                <p className="text-muted-foreground">
                  By teaching defensive driving and hazard awareness, we aim to
                  contribute to safer roads and fewer accidents in our
                  community.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">
                  Build Confident Drivers
                </h3>
                <p className="text-muted-foreground">
                  We strive to eliminate driving anxiety and build genuine
                  confidence through patient, supportive instruction and
                  real-world practice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">
                  Maintain Excellence
                </h3>
                <p className="text-muted-foreground">
                  We continuously improve our programs, invest in instructor
                  training, and update our curriculum to reflect best practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">
                  Serve Our Community
                </h3>
                <p className="text-muted-foreground">
                  Through outreach programs, partnerships, and accessible
                  pricing, we make quality driver education available to
                  everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide every decision we make and every lesson we
              teach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-2 hover:border-primary transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
            <div className="space-y-4 text-lg opacity-90">
              <p>
                When you choose J Atwal Driving School, you're not just signing
                up for driving lessons, you're joining a community dedicated to
                your success and safety.
              </p>
              <p>
                We commit to providing patient, professional instruction in a
                supportive environment where you can learn at your own pace.
                We'll be with you every step of the way, from your first lesson
                to the day you pass your test and beyond.
              </p>
              <p className="font-semibold">
                Your safety, confidence, and success are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
