import { useState, useEffect } from 'react';
import React from 'react';

export default function Table() {
  const [count, setCount] = useState(1);

  // 类似componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button 
        onClick={() => {
          setCount(Math.max(count-1, 1))
      }}>减少</button>
      <button
        onClick={() => {
          setCount(count+1)
      }}>增加</button>
      <span>{ count }</span>
    </div>
  );
}