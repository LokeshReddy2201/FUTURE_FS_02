
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { Product } from '@/hooks/useProducts';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to add products to your cart.",
        variant: "destructive",
      });
      return;
    }

    if (!product.in_stock) {
      toast({
        title: "Out of Stock",
        description: "This product is currently unavailable.",
        variant: "destructive",
      });
      return;
    }

    // Convert Supabase product to cart product format
    const cartProduct = {
      id: Number(product.id.split('-')[0]) || Math.floor(Math.random() * 1000000), // Convert UUID to number for cart compatibility
      name: product.name,
      price: Number(product.price),
      image: product.image_url || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
      category: product.categories?.name || 'Uncategorized',
      description: product.description || '',
      rating: Number(product.rating) || 0,
      reviews: product.reviews_count || 0,
      inStock: product.in_stock || false,
    };

    dispatch({ type: 'ADD_TO_CART', payload: cartProduct });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image_url || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400'}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.in_stock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Out of Stock</span>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-600">
              {product.categories?.name || 'Uncategorized'}
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(Number(product.rating) || 0)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {Number(product.rating).toFixed(1)} ({product.reviews_count || 0})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ₹{Number(product.price).toLocaleString('en-IN')}
            </span>
            
            <Button
              onClick={handleAddToCart}
              disabled={!product.in_stock || !user}
              size="sm"
              className="flex items-center space-x-1"
            >
              <ShoppingCart size={16} />
              <span>Add</span>
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
