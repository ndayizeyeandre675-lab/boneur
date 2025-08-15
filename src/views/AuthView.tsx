import React, { useState } from 'react';
import { SignInForm } from '../components/auth/SignInForm';
import { SignUpForm } from '../components/auth/SignUpForm';

interface AuthViewProps {
  mode: 'signin' | 'signup';
  onAuthenticate: (userData: any) => void;
}

export function AuthView({ mode, onAuthenticate }: AuthViewProps) {
  const [currentMode, setCurrentMode] = useState(mode);

  const handleSignIn = (email: string, password: string) => {
    // Mock authentication logic
    let userData = {
      id: '1',
      name: 'Demo User',
      email: email,
      role: 'customer'
    };

    // Demo account logic
    if (email === 'customer@demo.com') {
      userData = { ...userData, role: 'customer', name: 'Demo Customer' };
    } else if (email === 'farmer@demo.com') {
      userData = { ...userData, role: 'farmer', name: 'Demo Farmer' };
    } else if (email === 'admin@demo.com') {
      userData = { ...userData, role: 'admin', name: 'Demo Admin' };
    } else if (email === 'superadmin@demo.com') {
      userData = { ...userData, role: 'superadmin', name: 'Super Admin' };
    }

    onAuthenticate(userData);
  };

  const handleSignUp = (userData: any) => {
    // Mock user creation
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date()
    };

    onAuthenticate(newUser);
  };

  if (currentMode === 'signin') {
    return (
      <SignInForm
        onSignIn={handleSignIn}
        onSwitchToSignUp={() => setCurrentMode('signup')}
      />
    );
  }

  return (
    <SignUpForm
      onSignUp={handleSignUp}
      onSwitchToSignIn={() => setCurrentMode('signin')}
    />
  );
}