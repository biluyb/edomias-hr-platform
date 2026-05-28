"use client";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

export default function NewsPage() {
  const posts = [
    {
      id: 1,
      title: "Edomias International Plc Marks 18 Years of Excellence in Ethiopia",
      excerpt: "Celebrating nearly two decades of providing premier human resource solutions to domestic and international organizations.",
      date: "May 15, 2026",
      author: "Admin",
      tag: "Company Update",
      img: "/images/about_us_top_1779973104242.png"
    },
    {
      id: 2,
      title: "How to Optimize Your Recruitment Workflow with ERP Integration",
      excerpt: "Our new digital platform allows for seamless syncing between public job postings and internal ERP recruitment modules.",
      date: "May 10, 2026",
      author: "HR Expert",
      tag: "Recruitment",
      img: "/images/homepage_mid_1779972981736.png"
    },
    {
      id: 3,
      title: "New Security Training Program Launched for Specialized Roles",
      excerpt: "Enhancing our security personnel capacity through advanced training modules and background certification processes.",
      date: "April 28, 2026",
      author: "Operations",
      tag: "Security",
      img: "/images/security_service_1779975241613.png"
    },
    {
      id: 4,
      title: "Sustainability in Landscaping: Our Approach to Eco-Friendly Grounds",
      excerpt: "Implementing water-efficient systems and local plant varieties for our governmental and private sector landscaping contracts.",
      date: "April 20, 2026",
      author: "Landscaping Team",
      tag: "Environment",
      img: "/images/landscaping_service_1779972340193.png"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-white via-bg2 to-green-pale pt-[140px] pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="label"><div className="label-dot" /><span>News & Blog</span></div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-dark leading-tight mt-3">
              Latest <span className="gradient-text">Insights</span> & Updates
            </h1>
            <p className="text-lg text-gray mt-5 leading-relaxed">
              Stay up to date with corporate news, industry trends, and recruitment best practices in Ethiopia.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {posts.map((post, i) => (
              <div key={post.id} className="group fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="bg-bg2 border border-border rounded-3xl overflow-hidden hover:border-green hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                        {post.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-gray mb-4">
                      <div className="flex items-center gap-1.5"><Calendar size={14}/> {post.date}</div>
                      <div className="flex items-center gap-1.5"><User size={14}/> {post.author}</div>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-green transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <Link href={`/news/${post.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-dark group-hover:text-green transition-all">
                      Read Full Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-3.5 rounded-full text-sm font-bold text-dark border-2 border-border hover:border-green hover:text-green transition-all">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-py-sm bg-bg2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green to-transparent" />
            <div className="relative max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-4">Get Industry Updates</h2>
              <p className="text-white/60 mb-8">Subscribe to our newsletter to receive the latest HR insights and job opportunities directly in your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Enter your email" className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3.5 text-white focus:outline-none focus:border-green transition-all" />
                <button className="px-8 py-3.5 rounded-full text-sm font-bold text-white gradient-green shadow-lg">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
