import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Useeffectpresimple() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}
export default Useeffectpresimple;