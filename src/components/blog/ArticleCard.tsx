import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import { Blog } from "@/classes/BlogData";

interface ArticleCardProps {
  post: Blog;
  featured?: boolean;
}

const ArticleCard = ({ post, featured = false }: ArticleCardProps) => {
  return (
    <article className={`group ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
      <Link to={`/article/${post.slug}`} state={{...post}}>
        <div className={`
          bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm text-white 
          hover:-translate-y-1 overflow-hidden border border-border/50
          ${featured ? 'h-full' : 'h-auto'}
        `} style={{ border: 'none' }}>
          {/* Featured image placeholder */}
          <div className={`
            bg-gradient-to-br from-primary/10 to-accent/10 
            ${featured ? 'h-64 lg:h-80' : 'h-48'}
            flex items-center justify-center
          `}>
            <div className="text-6xl opacity-20">📝</div>
          </div>
          
          <div className={`p-6 ${featured ? 'flex flex-col justify-between flex-1' : ''}`}>
            <div>
              {/* Category and tags */}
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs text-white">
                  {post.category}
                </Badge>
                {featured && (
                  <Badge variant="outline" className="text-xs border-accent text-gradient">
                    Featured
                  </Badge>
                )}
              </div>
              
              {/* Title */}
              <h2 className={`
                font-bold text-portfolio-primary group-hover:text-gradient transition-colors line-clamp-2
                ${featured ? 'text-2xl lg:text-3xl mb-4' : 'text-xl mb-3'}
              `}>
                {post.title}
              </h2>
              
              {/* Excerpt */}
              <p className={`
                text-white leading-relaxed
                ${featured ? 'text-base mb-6 line-clamp-3' : 'text-sm mb-4 line-clamp-2'}
              `}>
                {post.excerpt}
              </p>
            </div>
            
            {/* Meta information */}
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-muted-foreground">
                    {post.author.name}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={12} />
                  <span>{post.readTime} min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;