import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ClaudeRecipe(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    // Simulating API request delay for demonstration
    if (props.recipe) {
      setIsLoading(false); // Simulate loading finish once the recipe is received
    }
  }, [props.recipe]);

  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Recommends:</h2>
      
      {isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading Recipe...</p>
        </div>
      ) : (
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      )}
    </section>
  );
}
