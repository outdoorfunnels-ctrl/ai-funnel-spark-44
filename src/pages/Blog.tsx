import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";

const featuredPost = {
  title: "How AI is Revolutionizing Sales Automation in 2024",
  excerpt: "Discover the latest trends in AI-powered sales automation and how businesses are leveraging these technologies to drive unprecedented growth.",
  author: "Sarah Johnson",
  date: "Dec 1, 2024",
  readTime: "8 min read",
  category: "Industry Trends",
};

const posts = [
  {
    title: "5 Ways AI Lead Reactivation Can Boost Your Revenue",
    excerpt: "Learn how to turn dormant leads into paying customers with intelligent AI automation.",
    author: "Michael Chen",
    date: "Nov 28, 2024",
    readTime: "5 min read",
    category: "Lead Generation",
  },
  {
    title: "The Ultimate Guide to AI Cold Calling",
    excerpt: "Everything you need to know about implementing AI-powered cold calling in your business.",
    author: "Emily Rodriguez",
    date: "Nov 25, 2024",
    readTime: "10 min read",
    category: "Sales",
  },
  {
    title: "Case Study: How TechCorp Increased Conversions by 300%",
    excerpt: "A deep dive into how one company transformed their sales process with our AI solutions.",
    author: "David Park",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    category: "Case Study",
  },
  {
    title: "AI Receptionist vs Traditional Receptionist: A Cost Analysis",
    excerpt: "Breaking down the ROI of switching to an AI-powered reception system.",
    author: "Sarah Johnson",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    category: "Analysis",
  },
  {
    title: "Best Practices for AI Appointment Setting",
    excerpt: "Tips and strategies to maximize your appointment booking rates with AI.",
    author: "Michael Chen",
    date: "Nov 10, 2024",
    readTime: "5 min read",
    category: "Tips & Guides",
  },
  {
    title: "The Future of Customer Acquisition: AI Trends to Watch",
    excerpt: "Expert predictions on how AI will shape customer acquisition in the coming years.",
    author: "Emily Rodriguez",
    date: "Nov 5, 2024",
    readTime: "8 min read",
    category: "Industry Trends",
  },
];

const categories = ["All", "Industry Trends", "Lead Generation", "Sales", "Case Study", "Tips & Guides"];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Resources & Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay ahead with the latest AI insights, industry trends, and practical guides.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-secondary/50 border border-border">
            <span className="text-sm font-medium text-primary">{featuredPost.category}</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">{featuredPost.title}</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">{featuredPost.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" /> {featuredPost.author}
              </span>
              <span>{featuredPost.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> {featuredPost.readTime}
              </span>
            </div>
            <Button variant="hero" asChild>
              <Link to="#">
                Read Article <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <span className="text-xs font-medium text-primary">{post.category}</span>
                <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest AI insights and industry news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
            />
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
