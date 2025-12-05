import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, CheckCircle, ArrowRight, Clock, DollarSign, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call or inquiry. Our AI receptionist works around the clock, including holidays.",
  },
  {
    icon: DollarSign,
    title: "Reduce Overhead Costs",
    description: "Save up to 70% on reception costs while providing superior customer service.",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Routing",
    description: "Smart call routing ensures customers always reach the right department or person.",
  },
];

const features = [
  "Natural voice AI that sounds human",
  "Multi-language support",
  "Appointment scheduling and management",
  "Call routing and transfer capabilities",
  "Message taking and instant notifications",
  "Integration with your phone system",
];

export default function Receptionist() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              AI Receptionist
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Replace traditional receptionists with AI-powered systems that answer calls, schedule appointments, and handle inquiries 24/7.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-8 rounded-2xl bg-secondary/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Always-On Assistant</h2>
              <p className="text-muted-foreground mb-8">
                Our AI Receptionist handles every incoming call with professionalism and efficiency, ensuring no opportunity is ever missed.
              </p>
              <div className="grid gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
              <h3 className="text-xl font-semibold mb-4">What Your AI Receptionist Can Do</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Answer Calls Professionally</p>
                    <p className="text-sm text-muted-foreground">Greet callers with customized scripts matching your brand voice</p>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Schedule Appointments</p>
                    <p className="text-sm text-muted-foreground">Book meetings directly into your calendar system</p>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Handle FAQs</p>
                    <p className="text-sm text-muted-foreground">Answer common questions about your business instantly</p>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Transfer & Route Calls</p>
                    <p className="text-sm text-muted-foreground">Intelligently direct callers to the right person or department</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss Another Call</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Get a 24/7 AI receptionist that provides exceptional customer service.
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
            <Link to="/contact">Book a Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
