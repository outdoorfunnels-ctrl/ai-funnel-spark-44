import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RefreshCcw, CheckCircle, ArrowRight, TrendingUp, Clock, Target } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Conversion Rates",
    description: "Reactivate cold leads with personalized AI messages that convert up to 3x better than traditional methods.",
  },
  {
    icon: Clock,
    title: "Save Time & Resources",
    description: "Automate follow-ups and re-engagement campaigns, freeing your team to focus on closing deals.",
  },
  {
    icon: Target,
    title: "Targeted Outreach",
    description: "AI analyzes lead behavior to send the right message at the right time for maximum impact.",
  },
];

const features = [
  "Intelligent lead scoring and prioritization",
  "Personalized message templates powered by AI",
  "Multi-channel outreach (email, SMS, voice)",
  "Automated follow-up sequences",
  "Real-time analytics and reporting",
  "CRM integration with popular platforms",
];

export default function LeadReactivation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <RefreshCcw className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              AI Lead Reactivation
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Revive old leads with AI-driven automation that re-engages past customers and brings them back to your sales funnel.
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
              <h2 className="text-3xl font-bold mb-6">Powerful Features</h2>
              <p className="text-muted-foreground mb-8">
                Our AI Lead Reactivation platform comes packed with features designed to maximize your lead conversion potential.
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
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0">1</span>
                  <div>
                    <p className="font-medium">Import Your Leads</p>
                    <p className="text-sm text-muted-foreground">Connect your CRM or upload your lead database</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0">2</span>
                  <div>
                    <p className="font-medium">AI Analysis</p>
                    <p className="text-sm text-muted-foreground">Our AI scores and segments your leads automatically</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0">3</span>
                  <div>
                    <p className="font-medium">Automated Outreach</p>
                    <p className="text-sm text-muted-foreground">Personalized messages sent at optimal times</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0">4</span>
                  <div>
                    <p className="font-medium">Convert & Close</p>
                    <p className="text-sm text-muted-foreground">Re-engaged leads delivered to your sales team</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Reactivate Your Leads?</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Start converting dormant leads into paying customers today.
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
            <Link to="/contact">Book a Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
