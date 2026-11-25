import { lazy, Suspense, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/motion/ScrollProgress";
import LoadingScreen, { ReadySignal } from "./components/layout/LoadingScreen";

// Each page is its own chunk, downloaded when first needed.
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-black">
    <ScrollProgress />
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

const App = () => {
  const [pageReady, setPageReady] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Sits above everything and stays until the lazy page has mounted */}
        <LoadingScreen ready={pageReady} />
        <BrowserRouter>
          {/* fallback is null: the loading screen is already covering the page */}
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/blog" element={<Layout><Blog /></Layout>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ReadySignal onReady={() => setPageReady(true)} />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;