
import React, { useState } from 'react';
import TrayConfigurator from './components/TrayConfigurator';
import { ProductsProvider } from './context/ProductsContext';

export default function App() {
  return (
    <ProductsProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-primary-600 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Configurador de Bandejas</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <TrayConfigurator />
        </main>
      </div>
    </ProductsProvider>
  );
}
