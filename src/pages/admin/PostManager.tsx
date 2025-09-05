import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Plus, Edit, Trash2, Search, NotepadText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import EmptySection from "@/components/empty";
import { BlogPost, categories } from "@/lib/blog-data";
import { Author } from "@/classes/Author";
import { useFirestoreDelete } from "@/api/DeleteBlog";
import { Blog } from "@/classes/BlogData";

const PostManager = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation()
  const [blogPosts, setBlogPost] = useState(location.state.blogPosts);
  const author = new Author(location.state.author['name'], location.state.author['email'], location.state.author['avatar'])
  let { deleteDocument } = useFirestoreDelete<Blog>('BlogPosts');
  
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });


  const handleDeletePost = (postId: string, postTitle: string) => {
    // Mock delete - in real app this would call an API
    toast({
      title: "Post deleted",
      description: `"${postTitle}" has been deleted successfully`,
    });
    console.log(blogPosts.filter(item => item.id !== postId))
    setBlogPost(blogPosts => blogPosts.filter(item => item.id !== postId));
    deleteDocument(postId)
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="min-h-screen">
          {/* Header */}
          <header className="border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Button className="hover:text-white hover:bg-portfolio-secondary text-white text-sm transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black" variant="ghost" onClick={() => navigate("/admin/dashboard", {state: {blogPosts: blogPosts, author: author}})}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-gradient">Manage Posts</h1>
                  <p className="text-portfolio-primary">Edit, delete, and organize your blog posts</p>
                </div>
              </div>
              <Button className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-sm transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black" onClick={() => navigate("/admin/posts/new", {state: {blogPosts: blogPosts, author: author}})}>
                <Plus className="h-4 w-4 mr-2 " />
                New Post
              </Button>
            </div>
          </header>

          <main className="container mx-auto p-6 space-y-6">
            {/* Filters */}
            <Card className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm text-white" style={{border: 'none'}}>
              <CardHeader>
                <CardTitle>Filter Posts</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search posts or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-800 text-white border-gray-700 focus:border-portfolio-primary"
                    // disabled={blogPosts.length <= 0 || searchTerm != ""}
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Posts Table */}
            <Card className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm text-white" style={{border: 'none'}}>
              <CardHeader>
                <CardTitle>Posts ({filteredPosts.length})</CardTitle>
                <CardDescription className="text-portfolio-primary">
                  Showing {filteredPosts.length} of {blogPosts.length} posts
                </CardDescription>
              </CardHeader>
              <CardContent>
                {filteredPosts.length <= 0 ? 
                <EmptySection icon={<NotepadText size={"150"} className="text-portfolio-primary"></NotepadText>} description={"No Posts was found"}></EmptySection> : <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gradient">Title</TableHead>
                      <TableHead className="text-gradient">Author</TableHead>
                      <TableHead className="text-gradient">Category</TableHead>
                      <TableHead className="text-gradient">Published</TableHead>
                      <TableHead className="text-gradient">Status</TableHead>
                      <TableHead className="text-right text-gradient">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{post.title}</div>
                            <div className="text-sm text-portfolio-primary truncate max-w-md">
                              {post.excerpt}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{post.author.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-white">{post.category}</Badge>
                        </TableCell>
                        <TableCell>{post.publishedAt}</TableCell>
                        <TableCell>
                          {post.featured ? (
                            <Badge className="text-gradient">Featured</Badge>
                          ) : (
                            <Badge variant="secondary">Published</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              onClick={() => navigate(`/admin/posts/edit/${post.id}`, {state: {blogPosts: blogPosts, author: author}})}
                              className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-sm transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleDeletePost(post.id, post.title)}
                              disabled={post.id ? false : true}
                              className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-sm transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>}
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PostManager;