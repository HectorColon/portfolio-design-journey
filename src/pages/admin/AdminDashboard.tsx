import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, FileText, Users, BarChart3, LogOut, NotepadText, Award } from "lucide-react";
import { BlogPost, _blogPosts } from "@/lib/blog-data";
import { useToast } from "@/hooks/use-toast";
import { Author } from "@/classes/Author";
import EmptySection from "@/components/empty";
import { useFirestoreGetBlogs } from "@/api/GetBlogs";
import { Blog } from "@/classes/BlogData";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const location = useLocation();
  const author = new Author(location.state.author['name'], location.state.author['email'], location.state.author['avatar'])
  const [posts, setPosts] = useState([]);
  let { blogPosts, loading, error } = useFirestoreGetBlogs<Blog>('BlogPosts');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin/login");
    }

    setPosts(location.state.blogPosts ? location.state.blogPosts : blogPosts)

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error,
      });
    }
  }, [navigate, posts, blogPosts]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate("/admin/login");
  };

  const stats = {
    totalPosts: posts.length,
    featuredPosts: posts.filter(post => post.featured).length,
    totalAuthors: new Set(posts.map(post => post.author.name)).size,
    categories: new Set(posts.map(post => post.category)).size,
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="min-h-screen">
          {/* Header */}
          <header className="border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gradient">Admin Dashboard</h1>
                <p className="text-portfolio-primary">Manage your blog content</p>
              </div>
              <Button className="hover:text-white hover:bg-portfolio-secondary text-white text-sm transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black" variant="ghost" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </header>

          <main className="container mx-auto p-6 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-900 text-white" style={{ border: 'none' }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
                  <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                  <FileText className="h-4 w-4 text-portfolio-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gradient">{stats.totalPosts}</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 text-white" style={{ border: 'none' }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Featured Posts</CardTitle>
                  <BarChart3 className="h-4 w-4 text-portfolio-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gradient">{stats.featuredPosts}</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 text-white" style={{ border: 'none' }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Authors</CardTitle>
                  <Users className="h-4 w-4 text-portfolio-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gradient">{stats.totalAuthors}</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 text-white" style={{ border: 'none' }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Categories</CardTitle>
                  <Award className="h-4 w-4 text-portfolio-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gradient">{stats.categories}</div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-gray-900" style={{ border: 'none' }}>
              <CardHeader>
                <CardTitle className="text-gradient">Quick Actions</CardTitle>
                <CardDescription>Manage your blog content</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button
                  onClick={() => navigate("/admin/posts/new", { state: { blogPosts: posts, author: author } })}
                  className="h-20 flex flex-col gap-2 bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
                  <Plus className="h-6 w-6" />
                  New Blog Post
                </Button>

                <Button
                  onClick={() => navigate("/admin/posts", { state: { blogPosts: posts, author: author } })}
                  className="h-20 flex flex-col gap-2 bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
                  <FileText className="h-6 w-6 " />
                  Manage Posts
                </Button>

              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="bg-gray-900 text-white" style={{ border: 'none' }}>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
                <CardDescription>Latest blog posts</CardDescription>
              </CardHeader>
              <CardContent>
                {posts.length <= 0 ? <EmptySection icon={<NotepadText size={"150"} className="text-portfolio-primary"></NotepadText>} description={"No Posts was found"}></EmptySection> : <div className="space-y-4">
                  {posts.slice(0, 5).map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {post.author.name} • {post.publishedAt}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {post.featured && <Badge className="text-gradient">Featured</Badge>}
                        <Button
                          size="sm"
                          className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-sm transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black"
                          onClick={() => navigate(`/admin/posts/edit/${post.id}`, { state: { blogPosts: posts, author: author } })}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>}
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;