import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { MarketplaceView } from './views/MarketplaceView';
import { FarmersView } from './views/FarmersView';
import { TrendsView } from './views/TrendsView';
import { AdminView } from './views/AdminView';
import { SuperAdminView } from './views/SuperAdminView';
import { CustomerDashboardView } from './views/CustomerDashboardView';
import { AuthView } from './views/AuthView';
import { CartView } from './views/CartView';
import { CartItem } from './types';
import { mockProducts, mockFarmers } from './utils/mockData';

function App() {
  const [currentView, setCurrentView] = useState('marketplace');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAddToCart = (productId: string) => {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(item => item.productId === productId);
    
    if (existingItem) {
      setCartItems(prev => 
        prev.map(item => 
          item.productId === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const newItem: CartItem = {
        id: Date.now().toString(),
        productId: productId,
        quantity: 1,
        price: product.price,
        farmerId: product.farmerId
      };
      setCartItems(prev => [...prev, newItem]);
    }
  };

  const handleUpdateCartQuantity = (itemId: string, quantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here');
    // In a real app, this would navigate to checkout page
  };

  const handleViewProducts = (farmerId: string) => {
    // In a real app, this would navigate to farmer's products page
    console.log('View products for farmer:', farmerId);
    setCurrentView('marketplace');
  };

  const handleAuthenticate = (userData: any) => {
    setUser(userData);
    setIsAuthenticated(true);
    
    // Redirect based on role
    if (userData.role === 'admin') {
      setCurrentView('admin');
    } else if (userData.role === 'superadmin') {
      setCurrentView('superadmin');
    } else if (userData.role === 'customer') {
      setCurrentView('customer-dashboard');
    } else {
      setCurrentView('marketplace');
    }
  };

  const handleSignOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCurrentView('marketplace');
  };

  const handleCartClick = () => {
    setCurrentView('cart');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'signin':
        return <AuthView mode="signin" onAuthenticate={handleAuthenticate} />;
      case 'signup':
        return <AuthView mode="signup" onAuthenticate={handleAuthenticate} />;
      case 'cart':
        return (
          <CartView
            cartItems={cartItems}
            products={mockProducts}
            farmers={mockFarmers}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveFromCart}
            onCheckout={handleCheckout}
            onBackToShopping={() => setCurrentView('marketplace')}
          />
        );
      case 'marketplace':
        return <MarketplaceView onAddToCart={handleAddToCart} />;
      case 'farmers':
        return <FarmersView onViewProducts={handleViewProducts} />;
      case 'trends':
        return <TrendsView />;
      case 'admin':
        return <AdminView />;
      case 'superadmin':
        return <SuperAdminView />;
      case 'customer-dashboard':
        return <CustomerDashboardView />;
      default:
        return <MarketplaceView onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView !== 'signin' && currentView !== 'signup' && (
        <Header 
          currentView={currentView}
          onViewChange={setCurrentView}
          cartItems={cartItems.length}
          isAuthenticated={isAuthenticated}
          userRole={user?.role}
          onSignOut={handleSignOut}
          onCartClick={handleCartClick}
        />
      )}
      {renderCurrentView()}
    </div>
  );
}

export default App;
