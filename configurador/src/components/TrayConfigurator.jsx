
import React, { useState } from 'react';
import FormatSelector from './FormatSelector';
import ColorPicker from './ColorPicker';
import HeaderEditor from './HeaderEditor';
import ProductGrid from './ProductGrid';
import ProductModal from './ProductModal';

export default function TrayConfigurator() {
  const [format, setFormat] = useState('small');
  const [colorScheme, setColorScheme] = useState('pastel');
  const [headerText, setHeaderText] = useState('Mi Bandeja Especial');
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormatSelector format={format} onFormatChange={setFormat} />
        <div className="space-y-4">
          <ColorPicker scheme={colorScheme} onSchemeChange={setColorScheme} />
          <HeaderEditor text={headerText} onTextChange={setHeaderText} />
        </div>
      </div>
      
      <ProductGrid 
        format={format}
        onProductSelect={setSelectedProduct}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
