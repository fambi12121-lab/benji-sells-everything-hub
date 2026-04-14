import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ShopifyCartSidebar from "@/components/ShopifyCartSidebar";
import { useCartSync } from "@/hooks/useCartSync";
import Index from "./pages/Index";
import AutoSales from "./pages/AutoSales";
import DigitalServices from "./pages/DigitalServices";
import MediaMarketing from "./pages/MediaMarketing";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return (
    <>
      <Toaster />
      <Sonner />
      <ShopifyCartSidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auto-sales" element={<AutoSales />} />
          <Route path="/digital-services" element={<DigitalServices />} />
          <Route path="/media" element={<MediaMarketing />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:handle" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
