import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Users, Award, ArrowRight } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to democratizing AI technology, making it accessible and effective for businesses of all sizes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We continuously push the boundaries of what's possible with AI to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Your success is our success. We measure our achievements by the results we deliver for our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from AI development to customer support.",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "2M+", label: "Leads Generated" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "AI Availability" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Appoint Funnels
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to help businesses scale using cutting-edge AI tools that automate and optimize customer acquisition processes.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
                  <img 
                    src={founderImage} 
                    alt="Ziauddin Shah - Founder & CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-semibold">Founder & CEO</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Ziauddin Shah</h2>
              <p className="text-primary font-medium mb-6">Founder & CEO</p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  "My journey into AI-driven business solutions started with a simple belief: every business, regardless of size, deserves access to cutting-edge technology that can transform their growth trajectory."
                </p>
                <p>
                  "At Appoint Funnels, we're not just building AI tools—we're creating opportunities. Our mission is to democratize AI technology and make it accessible, affordable, and effective for businesses worldwide."
                </p>
                <p>
                  "I'm passionate about helping entrepreneurs and business owners scale their operations without the overwhelming complexity. Let's build something amazing together."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At Appoint Funnels, we believe that every business deserves access to the transformative power of artificial intelligence. Our mission is to democratize AI-driven sales automation, making it accessible, affordable, and effective for companies of all sizes.
              </p>
              <p className="text-muted-foreground mb-6">
                We combine cutting-edge technology with deep industry expertise to create solutions that don't just automate tasks—they revolutionize how businesses connect with their customers and drive growth.
              </p>
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Work With Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-secondary text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and how we serve our clients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Us?</h2>
            <p className="text-muted-foreground mb-8">
              We're not just another AI company. We're your growth partner, combining industry expertise with cutting-edge technology to deliver results that matter.
            </p>
            <div className="space-y-4 text-left">
              {[
                "Proven track record with 500+ successful implementations",
                "Custom AI solutions tailored to your specific industry",
                "Dedicated support team available 24/7",
                "Transparent pricing with no hidden fees",
                "Seamless integration with your existing tech stack",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-secondary">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Ready to transform your business with AI? Let's start a conversation.
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
