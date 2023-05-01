import { useState } from "react";
//===============================

const testArray = ['👻', '👾', '👀', '🧠', '😃'];

function App() {

  const [arr, setArr] = useState(testArray);
  const [itemToPush, setItemToPush] = useState('');
  const [itemToUnshift, setItemToUnshift] = useState('')
  const [animatedIndex, setAnimatedIndex] = useState(null)


  function handlePushItem() {
    if(!itemToPush) return
    setAnimatedIndex(arr.length);
    setTimeout(() => {
      setAnimatedIndex(null)
    }, 1000)
    setArr([...arr, itemToPush]);
    setItemToPush('')
  }

  function handleUnshiftItem() {
    if(!itemToUnshift) return;
    setAnimatedIndex(0)
    setTimeout(() => {
      setAnimatedIndex(null)
    }, 1000)
    setArr([itemToUnshift, ...arr]);
    setItemToUnshift('')
  }
  
  function handlePop() {
    setAnimatedIndex(arr.length - 1);
    setTimeout(() => {
      let newArr = [...arr];
      newArr.pop();
      setArr(newArr);
      setAnimatedIndex(-1);
    }, 1000);
  };

  function handleShift() {
    setAnimatedIndex(0);
    setTimeout(() => {
      let newArr = [...arr];
      newArr.shift();
      setArr(newArr);
      setAnimatedIndex(null);
    }, 1000);
  }

  return (
    <main className="h-screen flex flex-col items-center bg-gray-200 pt-32">
      <h1 className="font-mono font-extrabold text-4xl">Array Methods</h1>
      <h2 className="font-mono font-bold text-lg">a visual representation</h2>
      <p className="text-4xl my-8">[{" "}
          {arr.map((item, index) => (
            <span
              key={index}
              className={`inline-block ${index === animatedIndex ? "animate-bounce bg-red-400" : ""}`}
            >
              {item}{index !== arr.length - 1 && ", "}
            </span>
          ))}
          {" ]"}
        </p>
      


        <section className="px-4 mt-4 rounded-lg bg-gray-600 py-2 flex items-center justify-center">
          <div className="flex gap-4 font-mono">
          <h1 className="font-extrabold text-center text-gray-200">Push/Pop</h1>
            <select value={itemToPush} onChange={(e) => setItemToPush(e.target.value)} className="rounded-lg py-1 text-sm focus:outline-none">
              <option>Item to push</option>
              <option value='😈'>😈</option>
              <option value='😇'>😇</option>
              <option value='😢'>😢</option>
              <option value='👨🏽‍💻'>👨🏽‍💻</option>
              <option value='🙈'>🙈</option>
              <option value='❤️'>❤️</option>
            </select>
            <button onClick={handlePushItem} className="px-2 bg-slate-500 hover:bg-slate-400 rounded-lg text-white">Push</button>
            <button onClick={handlePop} className="px-2 bg-slate-500 hover:bg-slate-400 rounded-lg text-white">Pop</button>
        </div>
        </section>

        <section className="px-4 mt-4 rounded-lg bg-gray-600 py-2 flex items-center justify-center">
          <div className="flex gap-4 font-mono">
          <h1 className="font-extrabold text-center text-gray-200">Shift/Unshift</h1>
            <select value={itemToUnshift} onChange={(e) => setItemToUnshift(e.target.value)} className="rounded-lg py-1 text-sm focus:outline-none">
              <option>Item to Unshift</option>
              <option value='😈'>😈</option>
              <option value='😇'>😇</option>
              <option value='😢'>😢</option>
              <option value='👨🏽‍💻'>👨🏽‍💻</option>
              <option value='🙈'>🙈</option>
              <option value='❤️'>❤️</option>
            </select>
            <button onClick={handleUnshiftItem} className="px-2 bg-slate-500 hover:bg-slate-400 rounded-lg text-white">Unshift</button>
            <button onClick={handleShift} className="px-2 bg-slate-500 hover:bg-slate-400 rounded-lg text-white">Shift</button>
        </div>
        </section>

       



    </main>
  );
}

export default App;


