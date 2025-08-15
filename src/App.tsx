import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { MarketplaceView } from './views/MarketplaceView';
import { FarmersView } from './views/FarmersView';
import { TrendsView } from './views/TrendsView';
import { AdminView } from './views/AdminView';

function App() {
  const [currentView, setCurrentView] = useState('marketplace');
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = (productId: string) => {
    setCartItems(prev => prev + 1);
    // In a real app, this would add the product to a cart state
    console.log('Added product to cart:', productId);
  };

  const handleViewProducts = (farmerId: string) => {
    // In a real app, this would navigate to farmer's products page
    console.log('View products for farmer:', farmerId);
    setCurrentView('marketplace');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'marketplace':
        return <MarketplaceView onAddToCart={handleAddToCart} />;
      case 'farmers':
        return <FarmersView onViewProducts={handleViewProducts} />;
      case 'trends':
        return <TrendsView />;
      case 'admin':
        return <AdminView />;
      default:
        return <MarketplaceView onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentView={currentView}
        onViewChange={setCurrentView}
        cartItems={cartItems}
      />
      {renderCurrentView()}
    </div>
  );
}

export default App;
