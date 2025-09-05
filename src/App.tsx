
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BlogList from "./pages/BlogList";
import Article from "./pages/Article";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PostManager from "./pages/admin/PostManager";
import PostEditor from "./pages/admin/PostEditor";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-black">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/list" element={<Layout><BlogList /></Layout>} />
          <Route path="/article/:slug" element={<Layout><Article /></Layout>} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Layout><AdminLogin /></Layout>} />
          <Route path="/admin/dashboard" element={<Layout><AdminDashboard /></Layout>} />
          <Route path="/admin/posts" element={<Layout><PostManager /></Layout>} />
          <Route path="/admin/posts/new" element={<Layout><PostEditor /></Layout>} />
          <Route path="/admin/posts/edit/:id" element={<Layout><PostEditor /></Layout>}/>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
