import React, { useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { addStyles, EditableMathField } from 'react-mathquill';

// Initialize MathQuill styles
addStyles();

function App() {
  const [latexInput, setLatexInput] = useState('\\frac{\\sin^4(x) - \\cos^4(x)}{\\sin^2(x) - \\cos^2(x)}');

  const renderLatex = (latex: string) => {
    try {
      return katex.renderToString(latex, {
        throwOnError: false,
        displayMode: true,
      });
    } catch (error) {
      return 'Invalid LaTeX';
    }
  };

  const mathButtons = [
    { label: 'sin', latex: '\\sin' },
    { label: 'cos', latex: '\\cos' },
    { label: 'tan', latex: '\\tan' },
    { label: 'x²', latex: '^2' },
    { label: 'x³', latex: '^3' },
    { label: '√', latex: '\\sqrt{}' },
    { label: 'π', latex: '\\pi' },
    { label: '∞', latex: '\\infty' },
    { label: '±', latex: '\\pm' },
    { label: '÷', latex: '\\div' },
    { label: '×', latex: '\\times' },
    { label: '(', latex: '(' },
    { label: ')', latex: ')' },
    { label: '{', latex: '{' },
    { label: '}', latex: '}' },
    { label: 'frac', latex: '\\frac{}{}' },
  ];

  const handleButtonClick = (latex: string) => {
    setLatexInput(prev => prev + latex);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Math Calculator</h1>
        
        {/* LaTeX Input with MathQuill */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">LaTeX Input</label>
          <EditableMathField
            latex={latexInput}
            onChange={(mathField) => setLatexInput(mathField.latex())}
            className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Math Buttons */}
        <div className="grid grid-cols-8 gap-2 mb-6">
          {mathButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(button.latex)}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 font-medium transition-colors"
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => {}}
          >
            Simplify
          </button>
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            onClick={() => {}}
          >
            Solve
          </button>
        </div>
      </div>
    </div>
  );
}

export default App; 