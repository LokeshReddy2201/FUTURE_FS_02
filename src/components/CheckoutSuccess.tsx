
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CheckoutSuccess = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <div className="mb-8">
          <CheckCircle size={80} className="mx-auto text-green-500 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-gray-600">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            What happens next?
          </h2>
          <div className="space-y-3 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                1
              </div>
              <div>
                <p className="font-medium text-gray-900">Order Processing</p>
                <p className="text-gray-600 text-sm">We'll prepare your items for shipment within 1-2 business days.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                2
              </div>
              <div>
                <p className="font-medium text-gray-900">Shipping Confirmation</p>
                <p className="text-gray-600 text-sm">You'll receive a tracking number via email once your order ships.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                3
              </div>
              <div>
                <p className="font-medium text-gray-900">Delivery</p>
                <p className="text-gray-600 text-sm">Your order will arrive within 3-7 business days.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag size={18} />
              <span>Continue Shopping</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link to="/" className="flex items-center space-x-2">
              <Home size={18} />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Need help? Contact our customer support team at{' '}
            <a href="mailto:support@ecomstore.com" className="text-blue-600 hover:underline">
              support@ecomstore.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
