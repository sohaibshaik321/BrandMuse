import React, { useState } from 'react';
import './BrandInputPanel.css';

function BrandInputPanel({ onGenerate, isLoading }) {
  const [formData, setFormData] = useState({
    brandName: '',
    industry: '',
    tone: '',
    keywords: '',
    campaignObjective: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.brandName && formData.industry && formData.tone) {
      onGenerate(formData);
    } else {
      alert('Please fill in Brand Name, Industry, and Tone at minimum.');
    }
  };

  return (
    <div className="brand-input-panel">
      <h2 className="panel-title">🎨 Brand Profile</h2>
      <form onSubmit={handleSubmit} className="brand-form">
        <div className="form-group">
          <label htmlFor="brandName">Brand Name *</label>
          <input
            type="text"
            id="brandName"
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            placeholder="e.g., TechFlow, StyleCo"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="industry">Industry *</label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          >
            <option value="">Select Industry</option>
            <option value="Fashion">Fashion</option>
            <option value="Tech">Tech</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Fitness">Fitness</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tone">Brand Tone *</label>
          <select
            id="tone"
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            required
          >
            <option value="">Select Tone</option>
            <option value="Friendly">Friendly</option>
            <option value="Bold">Bold</option>
            <option value="Luxury">Luxury</option>
            <option value="Playful">Playful</option>
            <option value="Minimalist">Minimalist</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="keywords">Keywords / Tagline</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            placeholder="e.g., innovation, quality, sustainability"
          />
        </div>

        <div className="form-group">
          <label htmlFor="campaignObjective">Campaign Objective</label>
          <select
            id="campaignObjective"
            name="campaignObjective"
            value={formData.campaignObjective}
            onChange={handleChange}
          >
            <option value="">Select Objective</option>
            <option value="Social Media Engagement">Social Media Engagement</option>
            <option value="Product Launch">Product Launch</option>
            <option value="Seasonal Ad">Seasonal Ad</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="generate-button"
          disabled={isLoading}
        >
          {isLoading ? '✨ Generating Ideas...' : '✨ Generate Ideas'}
        </button>
      </form>
    </div>
  );
}

export default BrandInputPanel;



