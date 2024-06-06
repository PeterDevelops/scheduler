import React, { useState } from 'react';
// custom hook
export default function useVisualMode(initial) {
  // mode keeps track of only the current mode
  const [mode, setMode] = useState(initial);

  // we store every mode state into an array so we can go back to its previous state
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
      setHistory(prevState => {
        if (replace) {
          return [...prevState.slice(0, prevState.length - 1), newMode];
        }
        // we add everything in the prevState plus our new mode into the array
        return [...prevState, newMode];
      });
  }

  const back = () => {
    if (history.length > 1) {
    setHistory(prev => 
      // slice between the 0th index to the last index, minus the last index
      [...prev.slice(0, prev.length - 1)]
    
  );
}
  }

  return { mode: history[history.length - 1], transition, back };
};