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
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Meet The Visionary
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              The Mind Behind Appoint Funnels
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Image Column */}
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  {/* Main Image Container */}
                  <div className="relative">
                    <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                      <img 
                        src={founderImage} 
                        alt="Ziauddin Shah - Founder & CEO" 
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                      
                      {/* Name on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                        <h3 className="text-2xl font-bold mb-1">Ziauddin Shah</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-0.5 bg-primary" />
                          <span className="text-primary font-medium">Founder & CEO</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg animate-fade-in">
                      <span className="text-sm font-bold">🚀 Visionary</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Column */}
              <div className="lg:col-span-3 space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 text-6xl text-primary/20 font-serif">"</div>
                  <blockquote className="text-lg sm:text-xl text-foreground font-medium leading-relaxed pl-6 border-l-4 border-primary">
                    My journey into AI-driven business solutions started with a simple belief: every business, regardless of size, deserves access to cutting-edge technology that can transform their growth trajectory.
                  </blockquote>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    At Appoint Funnels, we're not just building AI tools—we're creating opportunities. Our mission is to democratize AI technology and make it accessible, affordable, and effective for businesses worldwide.
                  </p>
                  <p className="leading-relaxed">
                    I'm passionate about helping entrepreneurs and business owners scale their operations without the overwhelming complexity. Let's build something amazing together.
                  </p>
                </div>
                
                {/* Signature & Stats */}
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">500+</div>
                      <div className="text-sm text-muted-foreground">Businesses Transformed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">5+ Years</div>
                      <div className="text-sm text-muted-foreground">Industry Experience</div>
                    </div>
                  </div>
                </div>
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
