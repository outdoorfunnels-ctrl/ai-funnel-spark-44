import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, ArrowRight, Mic, Clock, BarChart } from "lucide-react";

const benefits = [
  {
    icon: Mic,
    title: "AI Voice Recognition",
    description: "Natural-sounding AI conversations that adapt in real-time to prospect responses.",
  },
  {
    icon: Clock,
    title: "Automated Scheduling",
    description: "AI handles call scheduling and follow-ups without human intervention.",
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Detailed insights on call performance, conversion rates, and optimization opportunities.",
  },
];

const features = [
  "Natural language processing for human-like conversations",
  "Automatic call scheduling and dialing",
  "Real-time sentiment analysis",
  "Intelligent objection handling",
  "CRM integration and automatic logging",
  "Compliance with calling regulations",
];

export default function ColdCalling() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              AI Cold Calling
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Leverage AI-powered calling systems to reach potential clients and book meetings automatically.
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
            <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0">1</span>
                  <div>
                    <p className="font-medium">Upload Prospect List</p>
                    <p className="text-sm text-muted-foreground">Import your target contacts or connect to your CRM</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0">2</span>
                  <div>
                    <p className="font-medium">Configure AI Script</p>
                    <p className="text-sm text-muted-foreground">Customize talking points and objection responses</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0">3</span>
                  <div>
                    <p className="font-medium">AI Makes Calls</p>
                    <p className="text-sm text-muted-foreground">Automated outbound calling at scale</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0">4</span>
                  <div>
                    <p className="font-medium">Book Meetings</p>
                    <p className="text-sm text-muted-foreground">Qualified leads scheduled directly to your calendar</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Scale Without Hiring</h2>
              <p className="text-muted-foreground mb-8">
                Our AI cold calling solution handles thousands of calls daily, freeing your sales team to focus on closing deals instead of prospecting.
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Outreach?</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Let AI handle the cold calls while you focus on closing deals.
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
            <Link to="/contact">Book a Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
