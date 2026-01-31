import React, { useEffect, useState } from 'react';
import './ResultsPanel.css';

function ResultsPanel({ results, brandName }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (results) {
      setVisible(false);
      setTimeout(() => setVisible(true), 100);
    }
  }, [results]);

  if (!results) {
    return (
      <div className="results-panel">
        <div className="results-placeholder">
          <p>✨ Fill out the brand profile and click "Generate Ideas" to see AI-powered creative suggestions!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`results-panel ${visible ? 'visible' : ''}`}>
      <h2 className="results-title">💡 AI-Generated Ideas for {brandName}</h2>
      
      <div className="results-section">
        <h3 className="section-title">✨ Slogan Ideas</h3>
        <ul className="slogan-list">
          {results.slogans.map((slogan, index) => (
            <li key={index} className="slogan-item">{slogan}</li>
          ))}
        </ul>
      </div>

      <div className="results-section">
        <h3 className="section-title">📱 Social Captions</h3>
        <div className="caption-list">
          {results.captions.map((caption, index) => (
            <div key={index} className="caption-item">{caption}</div>
          ))}
        </div>
      </div>

      <div className="results-section">
        <h3 className="section-title">🧠 Campaign Concept</h3>
        <p className="concept-text">{results.concept}</p>
      </div>

      <div className="results-section">
        <h3 className="section-title">🎨 Mood Board Suggestions</h3>
        <div className="mood-board">
          <div className="mood-colors">
            <h4>Color Palette</h4>
            <div className="color-palette">
              {results.moodBoard.colors.map((color, index) => (
                <div
                  key={index}
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
          <div className="mood-details">
            <p><strong>Visual Style:</strong> {results.moodBoard.style}</p>
            <p><strong>Imagery Hints:</strong> {results.moodBoard.imagery}</p>
            <p><strong>Mood:</strong> {results.moodBoard.mood}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPanel;



