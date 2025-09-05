import { Author } from "@/classes/Author";
import { Blog } from "@/classes/BlogData";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author:  Author;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured: boolean;
  slug: string;
}

export const _blogPosts: Blog[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Discover the latest trends shaping web development this year, from AI integration to modern frameworks.",
    content: `
      <p>Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging every year. As we progress through 2024, several key trends are reshaping how we build and interact with web applications.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers. These tools not only increase productivity but also help maintain code quality and consistency across projects.</p>
      
      <h2>Performance-First Approach</h2>
      <p>With Core Web Vitals becoming increasingly important for SEO, developers are prioritizing performance from the ground up. This includes optimizing for Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>
      
      <h2>Component-Driven Architecture</h2>
      <p>The shift towards component-based development continues to gain momentum. Frameworks like React, Vue, and Angular have established patterns that promote reusability and maintainability.</p>
    `,
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face",
      email: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face"
    },
    category: "Technology",
    tags: ["Web Development", "AI", "Performance"],
    publishedAt: "2024-03-15",
    readTime: 8,
    featured: true,
    slug: "future-of-web-development-2024"
  },
  {
    id: "2",
    title: "Building Scalable React Applications: Best Practices",
    excerpt: "Learn essential patterns and techniques for creating maintainable React applications that scale.",
    content: `
      <p>Building scalable React applications requires careful planning and adherence to best practices. This guide covers essential patterns and techniques that will help your applications grow without becoming unwieldy.</p>
      
      <h2>Component Architecture</h2>
      <p>A well-structured component hierarchy is the foundation of any scalable React application. Consider using atomic design principles to organize your components into atoms, molecules, organisms, templates, and pages.</p>
      
      <h2>State Management</h2>
      <p>Choose the right state management solution for your needs. While React's built-in state is sufficient for many applications, larger projects may benefit from Redux, Zustand, or Jotai.</p>
      
      <h2>Code Splitting and Lazy Loading</h2>
      <p>Implement code splitting to reduce initial bundle size and improve loading performance. React's lazy() function and Suspense component make this straightforward.</p>
    `,
    author: {
      name: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    category: "Development",
    tags: ["React", "JavaScript", "Architecture"],
    publishedAt: "2024-03-10",
    readTime: 12,
    featured: true,
    slug: "building-scalable-react-applications"
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt: "A comprehensive comparison of CSS Grid and Flexbox to help you choose the right layout method.",
    content: `
      <p>CSS Grid and Flexbox are both powerful layout systems, but they excel in different scenarios. Understanding when to use each will make you a more effective developer.</p>
      
      <h2>Flexbox: One-Dimensional Layouts</h2>
      <p>Flexbox is perfect for one-dimensional layouts - either rows or columns. It's ideal for navigation bars, card layouts, and centering content.</p>
      
      <h2>CSS Grid: Two-Dimensional Layouts</h2>
      <p>CSS Grid shines when you need to control both rows and columns simultaneously. It's perfect for page layouts, image galleries, and complex UI components.</p>
      
      <h2>Combining Both</h2>
      <p>The most powerful approach is often using Grid for the overall page layout and Flexbox for component-level layouts.</p>
    `,
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    category: "Design",
    tags: ["CSS", "Layout", "Design"],
    publishedAt: "2024-03-08",
    readTime: 6,
    featured: false,
    slug: "css-grid-vs-flexbox-guide"
  },
  {
    id: "4",
    title: "TypeScript Tips for Better Code Quality",
    excerpt: "Enhance your TypeScript skills with these practical tips and advanced techniques.",
    content: `
      <p>TypeScript has become an essential tool for JavaScript developers who want to write more robust and maintainable code. Here are some advanced tips to level up your TypeScript skills.</p>
      
      <h2>Utility Types</h2>
      <p>Master TypeScript's built-in utility types like Pick, Omit, Partial, and Required. These can significantly reduce code duplication and improve type safety.</p>
      
      <h2>Generic Constraints</h2>
      <p>Use generic constraints to create more flexible yet type-safe functions and classes. The extends keyword is your friend for creating bounded type parameters.</p>
      
      <h2>Mapped Types</h2>
      <p>Create new types by transforming existing ones using mapped types. This is particularly useful for creating variations of existing interfaces.</p>
    `,
    author: {
      name: "Michael Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    category: "Development",
    tags: ["TypeScript", "JavaScript", "Code Quality"],
    publishedAt: "2024-03-05",
    readTime: 10,
    featured: false,
    slug: "typescript-tips-better-code-quality"
  },
  {
    id: "5",
    title: "The Art of API Design: RESTful Best Practices",
    excerpt: "Design clean, intuitive, and scalable APIs that developers will love to use.",
    content: `
      <p>Good API design is both an art and a science. A well-designed API can make the difference between a product that developers love and one they struggle with. Here's how to create APIs that stand the test of time.</p>
      
      <h2>Resource-Based URLs</h2>
      <p>Structure your URLs around resources, not actions. Use nouns for endpoints and let HTTP methods define the actions.</p>
      
      <h2>Consistent Response Formats</h2>
      <p>Maintain consistency in your response formats across all endpoints. This includes error responses, pagination, and data structures.</p>
      
      <h2>Proper HTTP Status Codes</h2>
      <p>Use HTTP status codes correctly to communicate the outcome of requests. This helps API consumers handle different scenarios appropriately.</p>
    `,
    author: {
      name: "Jessica Walsh",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    category: "Backend",
    tags: ["API", "REST", "Backend"],
    publishedAt: "2024-03-01",
    readTime: 7,
    featured: false,
    slug: "api-design-restful-best-practices"
  }
];

export const categories = [
  "All",
  "Technology",
  "Development", 
  "Design",
  "Backend"
];

export const getFeaturedPosts = () => _blogPosts.filter(post => post.featured);
export const getPostsByCategory = (category: string) => 
  category === "All" ? _blogPosts : _blogPosts.filter(post => post.category === category);
export const getPostBySlug = (slug: string) => _blogPosts.find(post => post.slug === slug);