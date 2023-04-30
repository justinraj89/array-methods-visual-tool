import { useState } from "react";
//===============================

const testArray = ['👻', '👾', '👀', '🧠', '😃'];

function App() {

  const [arr, setArr] = useState(testArray);
  

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-mono font-extrabold text-2xl">Array Methods</h1>
      <h2 className="font-mono font-bold text-lg">a visual representation</h2>

      <div className="mt-4 flex">
        <p className="text-2xl">[{arr.join(', ')}]</p>
      </div>

    </main>
  );
}

export default App;
