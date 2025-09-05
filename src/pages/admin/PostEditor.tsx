import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, X, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BlogPost, categories } from "@/lib/blog-data";
import { Author } from "@/classes/Author";
import { Blog } from "@/classes/BlogData";
import { useFirestoreCreate } from "@/api/CreateBlog";
import { useFirestoreUpdate } from "@/api/UpdateBlog";

const PostEditor = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const { pathname } = location;
  const id = pathname.split('/').pop()
  const author = new Author(location.state.author['name'], location.state.author['email'], location.state.author['avatar'])
  const { toast } = useToast();
  const isEdit = id !== "new";
  const [blogPosts, setBlogPost] = useState(location.state.blogPosts);
  const [closeEditPost, setCloseEditPost] = useState(false);
  let { createDocument } = useFirestoreCreate<Blog>('BlogPosts');
  let { updateDocument } = useFirestoreUpdate<Blog>('BlogPosts');

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: [] as string[],
    readTime: 5,
    featured: false,
  });

  const [tagInput, setTagInput] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (isEdit && id) {
      const post = blogPosts.find(p => p.id === id);
      console.log("useEffect:", post)
      if (post) {
        setFormData({
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          tags: post.tags,
          readTime: post.readTime,
          featured: post.featured,
        });
        console.log("parse data...")
      }
    }

    if (closeEditPost) {
      navigate("/admin/posts", { state: { blogPosts: blogPosts, author: author, isEdit: isEdit ? true : false, formData: formData } });
    }
     console.log(closeEditPost)
  }, [isEdit, id, closeEditPost]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const action = isEdit ? "updated" : "created";
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    const category = formData.category !== "" ? formData.category : "All"

    if (!isEdit) {
      let slug = formData.title.replace('/ /g', '-').toLowerCase()
      let blog = new Blog(formData.title, formData.excerpt, formData.content, author.toFireStore(), category, formData.tags, `${year}-${month}-${day}`, formData.readTime, formData.featured, slug)
      createDocument(blog.toFireStore())
      setBlogPost(blogPosts => [...blogPosts, blog])
        toast({
          title: `Post ${action}`,
          description: `"${formData.title}" has been ${action} successfully`,
        });
    } else {
      const post = blogPosts.find(p => p.id === id);
      let blog = new Blog(formData.title, formData.excerpt, formData.content, author, category, formData.tags, `${year}-${month}-${day}`, formData.readTime, formData.featured, post.slug)
      updateDocument(id, blog.toFireStore())
      setBlogPost(blogPosts => [
          ...blogPosts.filter(item => item.id !== id),
          blog
        ]);
        toast({
          title: `Post ${action}`,
          description: `"${formData.title}" has been ${action} successfully`,
        });
    }

    setCloseEditPost(true)
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="min-h-screen">
          {/* Header */}
          <header className="border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Button variant="ghost" className="hover:text-white hover:bg-portfolio-secondary text-white text-sm transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black" onClick={() => navigate("/admin/posts", { state: { blogPosts: blogPosts, author: author } })}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Posts
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-gradient">
                    {isEdit ? "Edit Post" : "Create New Post"}
                  </h1>
                  <p className="text-portfolio-primary">
                    {isEdit ? "Update your blog post" : "Write and publish a new blog post"}
                  </p>
                </div>
              </div>
              <Button
                type="button"
                className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-sm transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
            </div>
          </header>

          <main className="container mx-auto p-6 max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-gray-900 text-white" style={{ border: 'none' }}>
                    <CardHeader>
                      <CardTitle>Post Content</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          placeholder="Enter post title"
                          required
                          className="bg-gray-800 text-white border-gray-700 focus:border-portfolio-primary"
                        />
                      </div>

                      <div>
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea
                          id="excerpt"
                          value={formData.excerpt}
                          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                          placeholder="Brief description of the post"
                          rows={3}
                          required
                          className="bg-gray-800 text-white border-gray-700 focus:border-portfolio-primary"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <Label htmlFor="content">Content</Label>
                          <Button
                            type="button"
                            className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-sm transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black"
                            size="sm"
                            onClick={() => setShowPreview(!showPreview)}
                          >
                            {showPreview ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                            {showPreview ? "Edit" : "Preview"}
                          </Button>
                        </div>

                        {showPreview ? (
                          <div className="border rounded-md p-4 min-h-[400px] bg-background prose prose-sm max-w-none bg-gray-800 text-white border-gray-700 focus:border-portfolio-primary">
                            {/* Article Header */}
                            <div className="mb-6 ">
                              <h1 className="text-3xl font-bold mb-2">{formData.title || "Your Post Title"}</h1>
                              <p className="text-lg text-portfolio-primary mb-4">{formData.excerpt || "Your post excerpt..."}</p>
                              <div className="flex items-center gap-4 text-sm text-portfolio-primary">
                                <span>{author.name || "Author Name"}</span>
                                <span>•</span>
                                <span>{formData.readTime} min read</span>
                                {formData.featured && (
                                  <>
                                    <span>•</span>
                                    <span className="text-primary font-medium text-gradient">Featured</span>
                                  </>
                                )}
                              </div>
                            </div>

                            {/* Article Content */}
                            <div
                              className="prose prose-lg max-w-none"
                              dangerouslySetInnerHTML={{
                                __html: formData.content || "<p>Start writing your content...</p>"
                              }}
                            />

                            {/* Tags */}
                            {formData.tags.length > 0 && (
                              <div className="mt-8 pt-4 border-t">
                                <div className="flex flex-wrap gap-2">
                                  {formData.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-white">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <Textarea
                            id="content"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            placeholder="Write your blog post content here..."
                            rows={15}
                            className="font-mono bg-gray-800 text-white border-gray-700 focus:border-portfolio-primary"
                            required
                          />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Publish Settings */}
                  <Card className="bg-gray-900 text-white" style={{ border: 'none' }}>
                    <CardHeader>
                      <CardTitle>Publish Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 text-white border-gray-700 focus:border-portfolio-primary">
                            {categories.filter(cat => cat !== "All").map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="readTime">Read Time (minutes)</Label>
                        <Input
                          id="readTime"
                          type="number"
                          min="1"
                          value={formData.readTime}
                          onChange={(e) => setFormData({ ...formData, readTime: parseInt(e.target.value) || 5 })}
                          className="bg-gray-800 text-white border-gray-700 focus:border-portfolio-primary"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          id="outline"
                          checked={formData.featured}
                          onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                        />
                        <Label htmlFor="featured">Featured Post</Label>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tags */}
                  <Card className="bg-gray-900 text-white" style={{ border: 'none' }}>
                    <CardHeader>
                      <CardTitle>Tags</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-2">
                        <Input
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          placeholder="Add a tag"
                          onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                          className="bg-gray-800 text-white border-gray-700 focus:border-portfolio-primary"
                        />
                        <Button type="button" onClick={addTag} size="sm" className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-sm transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
                          Add
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {formData.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="flex items-center gap-1 text-white">
                            {tag}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => removeTag(tag)}
                            />
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Actions */}
                  <Card className="bg-gray-900 text-white" style={{ border: 'none' }}>
                    <CardContent className="pt-6">
                      <Button type="submit" className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-white text-sm transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
                        <Save className="h-4 w-4 mr-2" />
                        {isEdit ? "Update Post" : "Publish Post"}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;