import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BrandInputPanel from './components/BrandInputPanel';
import ResultsPanel from './components/ResultsPanel';
import BrandHistory from './components/BrandHistory';
import Footer from './components/Footer';
import { generateBrandIdeas } from './utils/brandAI';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (brandData) => {
    setIsLoading(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      const generatedResults = generateBrandIdeas(brandData);
      setResults(generatedResults);
      setCurrentBrand(brandData);
      
      // Save to localStorage
      const saved = localStorage.getItem('brandmuse_history');
      const history = saved ? JSON.parse(saved) : [];
      const brandEntry = {
        ...brandData,
        results: generatedResults,
        timestamp: generatedResults.timestamp
      };
      history.unshift(brandEntry);
      // Keep only last 20 entries
      const limitedHistory = history.slice(0, 20);
      localStorage.setItem('brandmuse_history', JSON.stringify(limitedHistory));
      
      setIsLoading(false);
    }, 1500);
  };

  const handleLoadBrand = (brandData) => {
    setCurrentBrand(brandData);
    setResults(brandData.results);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <div className="main-layout">
          <div className="left-panel">
            <BrandInputPanel 
              onGenerate={handleGenerate} 
              isLoading={isLoading}
            />
            <BrandHistory onLoadBrand={handleLoadBrand} />
          </div>
          <div className="right-panel">
            {isLoading ? (
              <div className="loading-panel">
                <div className="loading-spinner"></div>
                <p className="loading-text">Analyzing brand memory...</p>
                <p className="loading-subtext">✨ Generating creative ideas...</p>
              </div>
            ) : (
              <ResultsPanel results={results} brandName={currentBrand?.brandName} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;



