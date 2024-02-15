import React, { useState, useCallback, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [, forceRender] = useState(0);
    const rerenders=useRef(0);
    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };
    rerenders.current=rerenders.current+1;

    return (
        <div>
            <p>This component has rendered {rerenders.current} times.</p>
            <button  onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};