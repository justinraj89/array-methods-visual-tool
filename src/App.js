import { useState } from "react";
//===============================

const testArray = ['👻', '👾', '👀', '🧠', '😃'];

function App() {

  const [arr, setArr] = useState(testArray);
  const [itemToPush, setItemToPush] = useState('');
  const [animatedIndex, setAnimatedIndex] = useState(null)


  function handlePushItem(e) {
    e.preventDefault();
    if(!itemToPush) return
    setAnimatedIndex(arr.length);
    setTimeout(() => {
      setAnimatedIndex(null)
    }, 1000)
    setArr([...arr, itemToPush]);
    setItemToPush('')
  }
  
  function handlePop() {
    setAnimatedIndex(arr.length - 1);
    setTimeout(() => {
      let newArr = [...arr];
      newArr.pop();
      setArr(newArr);
      setAnimatedIndex(-1);
    }, 1000);
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-mono font-extrabold text-2xl">Array Methods</h1>
      <h2 className="font-mono font-bold text-lg">a visual representation</h2>

      <div className="mt-4 flex flex-col w-5/6 lg:w-1/3 justify-center items-center bg-gray-300 rounded-lg py-10">

      <p className="text-4xl">[{" "}
          {arr.map((item, index) => (
            <span
              key={index}
              className={`inline-block ${index === animatedIndex ? "bg-red-400" : ""}`}
            >
              {item}{index !== arr.length - 1 && ", "}
            </span>
          ))}
          {" ]"}
        </p>

        <section className="px-4 mt-4 rounded-lg bg-gray-600 py-2 flex items-center justify-center">
          <form onSubmit={handlePushItem} className="flex gap-4 font-mono">
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
            <button type="submit" className="px-2 bg-slate-500 hover:bg-slate-400 rounded-lg text-white">Push</button>
            <button onClick={handlePop} className="px-2 bg-slate-500 hover:bg-slate-400 rounded-lg text-white">Pop</button>
        </form>
        </section>


       

      </div>

    </main>
  );
}

export default App;


{/* <p className="text-4xl">[{arr.join(', ')}]</p> */}