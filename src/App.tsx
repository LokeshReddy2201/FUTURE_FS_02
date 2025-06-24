
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CheckoutSuccess from './components/CheckoutSuccess';
import Auth from './components/Auth';
import NotFound from "./pages/NotFound";
import FakeStoreProducts from './components/FakeStoreProducts';

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
};

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  if (user) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen bg-gray-50">
              <Routes>
                <Route 
                  path="/auth" 
                  element={
                    <AuthRoute>
                      <Auth />
                    </AuthRoute>
                  } 
                />
                <Route 
                  path="/*" 
                  element={
                    <>
                      <Navbar />
                      <main>
                        <Routes>
                          <Route path="/" element={<FakeStoreProducts />} />
                          <Route path="/product/:id" element={<ProductDetails />} />
                          <Route 
                            path="/cart" 
                            element={
                              <ProtectedRoute>
                                <Cart />
                              </ProtectedRoute>
                            } 
                          />
                          <Route 
                            path="/checkout" 
                            element={
                              <ProtectedRoute>
                                <Checkout />
                              </ProtectedRoute>
                            } 
                          />
                          <Route 
                            path="/success" 
                            element={
                              <ProtectedRoute>
                                <CheckoutSuccess />
                              </ProtectedRoute>
                            } 
                          />
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </main>
                    </>
                  } 
                />
              </Routes>
            </div>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
