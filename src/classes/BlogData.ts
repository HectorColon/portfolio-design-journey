import { Author } from "./Author";

interface BlogData {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        avatar: string;
        email: string;
    };
    category: string;
    tags: string[];
    publishedAt: string;
    readTime: number;
    featured: boolean;
    slug: string;
}

export class Blog implements BlogData {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        avatar: string;
        email: string;
    }
    category: string;
    tags: string[];
    publishedAt: string;
    readTime: number;
    featured: boolean;
    slug: string;

    constructor(title: string, excerpt: string, content: string, author: any, category: string, tags: string[], publishedAt: string, readTime: number, featured: boolean, slug: string) {
        this.title = title;
        this.excerpt = excerpt;
        this.content = content;
        this.category = category;
        this.author = author;
        this.tags = tags;
        this.publishedAt = publishedAt;
        this.readTime = readTime;
        this.featured = featured;
        this.slug = slug;
    }

    toFireStore() {
        return {
            // id: this.id,
            title: this.title,
            excerpt: this.excerpt,
            content: this.content,
            category: this.category,
            author: this.author,
            tags: this.tags,
            publishedAt: this.publishedAt,
            readTime: this.readTime,
            featured: this.featured,
            slug: this.slug,
        }
    }
}