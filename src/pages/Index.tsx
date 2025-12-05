import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Phone, 
  Calendar, 
  Users, 
  RefreshCcw,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  Bot
} from "lucide-react";

const services = [
  {
    icon: RefreshCcw,
    title: "AI Lead Reactivation",
    description: "Revive dormant leads with AI-driven automation that re-engages past customers and brings them back to your sales funnel.",
    href: "/services/lead-reactivation",
  },
  {
    icon: Phone,
    title: "AI Cold Calling",
    description: "Leverage AI-powered calling systems to reach potential clients and book meetings automatically.",
    href: "/services/cold-calling",
  },
  {
    icon: Bot,
    title: "AI Receptionist",
    description: "24/7 AI-powered systems that answer calls, schedule appointments, and handle inquiries seamlessly.",
    href: "/services/receptionist",
  },
  {
    icon: Calendar,
    title: "AI Appointment Setters",
    description: "Our AI appointment setters book meetings with your leads, ensuring no opportunities are missed.",
    href: "/services/appointment-setters",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deploy AI solutions in days, not months. Start seeing results immediately.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols to protect your data and customer information.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Our AI systems scale with your business, handling thousands of interactions seamlessly.",
  },
];

const trustedBy = ["ZAPIER", "BOLT", "STACKBLITZ", "TOPVIEW AI", "BASE44", "LOVABLE"];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(168_80%_35%/0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Scale Your Business with{" "}
              <span className="text-gradient">AI-Driven Funnels</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Leverage AI to streamline your processes, automate outreach, and drive exponential growth without increasing headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/solutions">Watch Demo</Link>
              </Button>
            </div>
          </div>

          {/* Trusted By */}
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-center text-sm text-muted-foreground mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
              {trustedBy.map((company) => (
                <span key={company} className="text-muted-foreground/60 font-semibold tracking-wide text-sm">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              AI-Powered Solutions for Every Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our suite of AI tools automates and optimizes your customer acquisition processes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="text-primary font-medium inline-flex items-center gap-2">
                  Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Businesses Choose Appoint Funnels
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine cutting-edge AI technology with proven sales strategies to deliver measurable results for your business.
              </p>
              <ul className="space-y-4">
                {[
                  "Increase lead conversion rates by up to 300%",
                  "Reduce customer acquisition costs by 60%",
                  "24/7 automated customer engagement",
                  "Seamless integration with your existing tools",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="mt-8" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-card border border-border shadow-soft"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-background/70 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses that have scaled their operations with our AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
