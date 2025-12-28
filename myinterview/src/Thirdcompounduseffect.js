import { useEffect, useState } from "react"
import Simpleuseffect from "./Simpleprops"

import React from 'react';
function UseThirdCompoundUseEffect() {
//      let [state, setState] = useState(0)
//     useEffect(() => {
//         state = fetch("https://api.example.com/data")
//     }, []);
//     return (
//     <div>


// <h1 style={{ color: 'blue' }}>
//         hello Third compound use effect
//         {state}
//     </h1>
//     <button onClick={() => setState(state + 1)}>Increment</button>
// </div>)

const [userData, setUserData] = useState(null);

    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Define the async function
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        // 2. Update state with data
        setData(result);
      } catch (error) {
        // 3. Handle errors
        setError(error.message);
      } finally {
        // 4. Turn off loading state
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty array ensures this runs once

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    
    <Simpleuseffect data={data}></Simpleuseffect>
  )


}
export default UseThirdCompoundUseEffect;