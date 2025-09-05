import { useParams, Navigate, useLocation } from "react-router-dom";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowLeft, Share2, Search } from "lucide-react";
import { getPostBySlug } from "@/lib/blog-data";

const Article = () => {
  const location = useLocation()
  const post = location.state ? location.state : null;

  if (!post) {
    return <Navigate to="/notfound" replace />;
  }

  const breadcrumbItems = [
    { label: post.title }
  ];

  return (
    <div className="min-h-screen pt-40 pb-16 relative overflow-hidden">
      <div className="min-h-screen">

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Article Header */}
          <article className="pt-8 max-w-4xl mx-auto">
            <header className="mb-12">
              {/* Category and Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Badge variant="outline" className="text-white">
                  {post.category}
                </Badge>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs text-white">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-portfolio-primary mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b">
                <div className="flex items-center space-x-4">
                  <img
                    src={`/${post.author.avatar}`}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-portfolio-primary">
                      {post.author.name}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-white">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <Button variant="outline" size="sm" className="w-fit">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button> */}
              </div>
            </header>

            {/* Featured Image Placeholder */}
            <div className="mb-12">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <div className="text-8xl opacity-20">📝</div>
              </div>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg prose-gray max-w-none prose-headings:text-white prose-p:text-white prose-strong:text-white prose-code:text-accent prose-pre:bg-muted/50 prose-blockquote:border-accent prose-blockquote:text-portfolio-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-portfolio-primary">Tags:</span>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Article
                </Button> */}
              </div>
            </footer>
          </article>

          {/* Related Articles Section - Placeholder */}
          <section className="max-w-4xl mx-auto mt-16 pt-16 border-t">
            <h2 className="text-2xl font-bold text-white mb-8">
              More Articles You Might Like
            </h2>
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto py-8 text-portfolio-primary">
              {/* <div className="text-4xl mb-2"></div> */}
              <div className="pb-4"><Search size={"50"}></Search></div>
              <p>Related articles coming soon!</p>
            </div>
          </section>
        </main>

      </div>
    </div>

  );
};

export default Article;