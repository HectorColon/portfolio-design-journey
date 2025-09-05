
import React, { useEffect, useState } from 'react';
import ContactForm from '@/components/ui/contact-form/ContactForm';
import ArticleCard from '@/components/blog/ArticleCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BlogPost, getPostsByCategory } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import { ArrowRight, NotepadText } from 'lucide-react';
import { useFirestoreGetBlogs } from '@/api/GetBlogs';
import CardSkeleton from '@/components/card-skeleton';
import EmptySection from '@/components/empty';
import { Blog } from "@/classes/BlogData";

const Blog = () => {
  const navigate = useNavigate();

  const { blogPosts, loading, error } = useFirestoreGetBlogs<Blog>('BlogPosts');

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        {/* Background title */}
        <div className="absolute top-20 left-0 w-full text-center">
          <h1 className="big-title text-gradient pb-16">POSTS</h1>
        </div>

        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-white">
            <span className="text-gradient">Blog</span>
          </h1>
        </div>
        {/* Featured Articles */}
        {loading ? <div className=' items-center'>{[0, 1, 2].map(() => (<CardSkeleton></CardSkeleton>))}</div> : blogPosts.length > 0 ? <div><section className="py-16 bg-subtle-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                Featured Articles
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto">
                Handpicked articles covering the latest trends and best practices in web development
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {featuredPosts.map((post, index) => (
                <ArticleCard
                  key={post.id}
                  post={post}
                  featured={index === 0}
                />
              ))}
            </div>
          </div>
        </section>

          {/* Recent Articles */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-gradient mb-2">
                    Recent Articles
                  </h2>
                  <p className="text-white">
                    Stay up to date with the latest posts
                  </p>
                </div>
                <Button onClick={() => navigate("/list", { state: { blogPosts: blogPosts } })} className="hidden sm:flex bg-portfolio-primary hover:bg-portfolio-secondary text-white w-full md:w-auto">
                  View All Post
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <ArticleCard key={post.id} post={post} />
                ))}
              </div>

              <div className="text-center mt-12 sm:hidden">
                <Button onClick={() => navigate("/list", { state: { blogPosts: blogPosts } })} className="bg-portfolio-primary hover:bg-portfolio-secondary text-white w-full md:w-auto">
                  View All Post
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gradient mb-4">
                  Stay in the Loop
                </h2>
                <p className="text-white mb-8 text-lg">
                  Get the latest articles and insights delivered straight to your inbox.
                  No spam, just quality content.
                </p>
                <ContactForm></ContactForm>
              </div>
            </div>
          </section>
        </div> : <EmptySection icon={<NotepadText size={"150"} className="text-portfolio-primary"></NotepadText>} description={"No Posts was found"}></EmptySection>}
      </div>
    </div>
  );
};

export default Blog;
