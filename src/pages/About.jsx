import { Component, useEffect, useState } from 'react';


function CountDemo() {
  const [count, setCount] = useState(0);

 useEffect(()=>{
    console.log("compoent mounted");
    return (()=>{
        console.log("component cleaned up before unmounting ")
    })
 },[])

 useEffect(() => {
  console.log(`🔁 Count changed to ${count}`);

  return () => {
    console.log(`🧹 Cleanup before count changes from ${count}`);
  };
}, [count]);



  return (
    <div className="border p-3 rounded bg-light mt-3">
      <h4>Count: {count}</h4>
      <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>➕ Increment</button>
    </div>
  );
}


export default function About() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-primary">About Us</h1>
      <p>
        We are a team of passionate developers dedicated to building user-friendly applications using modern web technologies.
        This page is a demonstration of how React <code>useEffect</code> works in real-time.
      </p>

      <button
        className={`btn ${showCounter ? 'btn-danger' : 'btn-success'} my-3`}
        onClick={() => setShowCounter(!showCounter)}
      >
        {showCounter ? '❌ Hide Counter' : '🔄 Show Counter'}
      </button>

      {showCounter && <CountDemo />}
    </div>
  );
}
