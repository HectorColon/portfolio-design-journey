import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import ArticleCard from "@/components/blog/ArticleCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { getPostsByCategory } from "@/lib/blog-data";
import EmptySection from "@/components/empty";
import { NotepadText, Search } from "lucide-react";

const BlogList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");
    const location = useLocation()
    const posts = selectedCategory === "All" ? location.state.blogPosts : location.state.blogPosts.filter(post => post.category === selectedCategory)

    useEffect(() => {
        const category = searchParams.get("category");
        if (category) {
            setSelectedCategory(category);
        }
    }, [searchParams]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        if (category === "All") {
            setSearchParams({});
        } else {
            setSearchParams({ category });
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
            <div className="container mx-auto px-4">
                <div className="min-h-screen">
                    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <Breadcrumbs />

                        {/* Page Header */}
                        <div className="mb-12">
                            <p className="text-xl text-white max-w-2xl">
                                Explore articles about web development, design patterns, and technology trends.
                            </p>
                        </div>

                        {/* Category Filter */}
                        <CategoryFilter
                            selectedCategory={selectedCategory}
                            onCategoryChange={handleCategoryChange}
                        />

                        {/* Results Header */}
                        {posts.length > 0 ? <div className="mb-8">
                            <p className="text-portfolio-primary">
                                {selectedCategory === "All"
                                    ? `Showing all ${posts.length} articles`
                                    : `Showing ${posts.length} articles in "${selectedCategory}"`
                                }
                            </p>
                        </div> : ""}

                        {/* Articles Grid */}
                        {posts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post) => (
                                    <ArticleCard key={post.id} post={post} />
                                ))}
                            </div>
                        ) : (
                            <EmptySection icon={<NotepadText size={"150"} className="text-portfolio-primary"></NotepadText>} description={"No Posts was found!"}></EmptySection>
                        )}
                    </main>
                </div>
            </div>
        </div>

    );
};

export default BlogList;