import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  RefreshCcw, 
  Phone, 
  Bot, 
  Calendar, 
  ArrowRight,
  Building2,
  ShoppingCart,
  Home,
  Briefcase
} from "lucide-react";

const services = [
  {
    icon: RefreshCcw,
    title: "AI Lead Reactivation",
    description: "Revive old leads with AI-driven automation that re-engages past customers and brings them back to your sales funnel.",
    href: "/services/lead-reactivation",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Phone,
    title: "AI Cold Calling",
    description: "Leverage AI-powered calling systems to reach potential clients and book meetings automatically.",
    href: "/services/cold-calling",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Bot,
    title: "AI Receptionist",
    description: "24/7 AI-powered systems that answer calls, schedule appointments, and handle inquiries seamlessly.",
    href: "/services/receptionist",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Calendar,
    title: "AI Appointment Setters",
    description: "Our AI appointment setters book meetings with your leads, ensuring no opportunities are missed.",
    href: "/services/appointment-setters",
    color: "bg-orange-500/10 text-orange-600",
  },
];

const industries = [
  {
    icon: Building2,
    title: "B2B Services",
    description: "Scale your outreach and book more demos with AI-powered prospecting.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Follow up with leads instantly and schedule property viewings automatically.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Re-engage abandoned carts and past customers with personalized outreach.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Never miss a client inquiry with 24/7 AI reception and scheduling.",
  },
];

export default function Solutions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              AI Solutions for Every Business
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover how our AI-powered tools can transform your customer acquisition and streamline operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="h-7 w-7" />
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

      {/* Why AI Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why AI?</h2>
            <p className="text-muted-foreground">
              AI is revolutionizing how businesses operate. Here's why companies are making the switch.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-2">300%</div>
              <p className="text-muted-foreground">Average increase in lead conversion rates</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <p className="text-muted-foreground">Reduction in customer acquisition costs</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Around-the-clock availability for your customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry.title} className="p-6 rounded-2xl bg-secondary/50 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Find the Right Solution for Your Business</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Not sure which service is right for you? Let's chat and find the perfect fit.
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
