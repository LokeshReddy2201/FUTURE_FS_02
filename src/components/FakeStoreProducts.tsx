
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/context/CartContext';

interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const FakeStoreProducts = () => {
  const [products, setProducts] = useState<FakeStoreProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: FakeStoreProduct) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to add products to your cart.",
        variant: "destructive",
      });
      return;
    }

    // Convert Fake Store product to cart product format
    const cartProduct = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description,
      rating: product.rating.rate,
      reviews: product.rating.count,
      inStock: true,
    };

    dispatch({ type: 'ADD_TO_CART', payload: cartProduct });
    toast({
      title: "Added to Cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2 text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Error loading products</h3>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Mythara Store
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing products from our curated collection
        </p>
        {!user && (
          <p className="text-sm text-blue-600 mt-4">
            Please sign in to add products to your cart
          </p>
        )}
      </div>

      {/* Products Grid - Responsive: 1 column mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1">
                <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </CardTitle>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600">
                      {product.rating.rate} ({product.rating.count})
                    </span>
                  </div>
                </div>

                <CardDescription className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {product.description}
                </CardDescription>

                <div className="mb-4">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              <Button
                onClick={() => handleAddToCart(product)}
                disabled={!user}
                className="w-full flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={16} />
                <span>Add to Cart</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FakeStoreProducts;
