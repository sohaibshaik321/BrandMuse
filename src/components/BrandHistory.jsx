import React, { useState, useEffect } from 'react';
import './BrandHistory.css';

function BrandHistory({ onLoadBrand }) {
  const [savedBrands, setSavedBrands] = useState([]);

  useEffect(() => {
    loadSavedBrands();
  }, []);

  const loadSavedBrands = () => {
    const saved = localStorage.getItem('brandmuse_history');
    if (saved) {
      try {
        const brands = JSON.parse(saved);
        setSavedBrands(brands);
      } catch (e) {
        console.error('Error loading saved brands:', e);
      }
    }
  };

  const handleLoad = (brandData) => {
    onLoadBrand(brandData);
  };

  const handleDelete = (index, e) => {
    e.stopPropagation();
    const updated = savedBrands.filter((_, i) => i !== index);
    setSavedBrands(updated);
    localStorage.setItem('brandmuse_history', JSON.stringify(updated));
  };

  const handleClearAll = () => {
    if (window.confirm('Clear all saved brands?')) {
      setSavedBrands([]);
      localStorage.removeItem('brandmuse_history');
    }
  };

  if (savedBrands.length === 0) {
    return (
      <div className="brand-history">
        <h3 className="history-title">📚 Brand History</h3>
        <p className="history-empty">No saved brands yet. Generate ideas to see them here!</p>
      </div>
    );
  }

  return (
    <div className="brand-history">
      <div className="history-header">
        <h3 className="history-title">📚 Brand History</h3>
        <button className="clear-button" onClick={handleClearAll}>Clear All</button>
      </div>
      <div className="history-list">
        {savedBrands.map((brand, index) => (
          <div
            key={index}
            className="history-item"
            onClick={() => handleLoad(brand)}
          >
            <div className="history-item-content">
              <h4 className="history-brand-name">{brand.brandName}</h4>
              <p className="history-meta">
                {brand.industry} • {brand.tone}
              </p>
              <p className="history-date">
                {new Date(brand.timestamp).toLocaleDateString()}
              </p>
            </div>
            <button
              className="delete-button"
              onClick={(e) => handleDelete(index, e)}
              title="Delete"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandHistory;



