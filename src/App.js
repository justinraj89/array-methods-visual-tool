import { useState } from "react";
//===============================

const testArray = ["👻", "👾", "👀", "🧠", "😃"];

function App() {
  // State variables
  const [arr, setArr] = useState(testArray);
  const [animatedIndex, setAnimatedIndex] = useState(null);
  const [itemToPush, setItemToPush] = useState(null);
  const [itemToUnshift, setItemToUnshift] = useState(null);
  const [itemToSplice, setItemToSplice] = useState(null);
  const [itemSpliceStart, setItemSpliceStart] = useState(null)
  const [deleteAmount, setDeleteAmount] = useState(null);

 
  function handlePushItem() {
    if (!itemToPush) return;
    setAnimatedIndex(arr.length);
    setTimeout(() => {
      setAnimatedIndex(null);
    }, 1000);
    setArr([...arr, itemToPush]);
    setItemToPush("");
  }

  function handleUnshiftItem() {
    if (!itemToUnshift) return;
    setAnimatedIndex(0);
    setTimeout(() => {
      setAnimatedIndex(null);
    }, 1000);
    setArr([itemToUnshift, ...arr]);
    setItemToUnshift("");
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

  function handleShift() {
    setAnimatedIndex(0);
    setTimeout(() => {
      let newArr = [...arr];
      newArr.shift();
      setArr(newArr);
      setAnimatedIndex(null);
    }, 1000);
  }

  function handleSplice() {
    const index = Number(itemSpliceStart);
    const deleteCount = Number(deleteAmount);
    const newArr = [...arr];
    if (itemToSplice === "") {
      newArr.splice(index, deleteCount);
    } else {
      newArr.splice(index, deleteCount, itemToSplice);
    }
    setArr(newArr);
  
    const insertedItemIndex = index;
    const deletedItemIndex = index + deleteCount;
    if (insertedItemIndex <= deletedItemIndex) {
      setAnimatedIndex(insertedItemIndex);
    } else {
      setAnimatedIndex(deletedItemIndex);
    }
  
    setTimeout(() => {
      setAnimatedIndex(null);
    }, 1000);
  
    setItemToSplice("");
    setDeleteAmount("");
    setItemSpliceStart("");
  
    // Remove any null values from the array
    setArr(newArr.filter(item => item !== null));
  }

  return (
    <main className="h-screen flex flex-col items-center bg-gray-200 pt-32">
      <h1 className="font-mono font-extrabold text-4xl uppercase tracking-wider">
        Array Methods
      </h1>
      <h2 className="font-mono font-bold text-lg">a visual representation</h2>

      <p className="text-4xl my-8 flex gap-4">
        {"[  "}
        {arr.map((item, index) => (
          <span
            key={index}
            className={`${
              index === animatedIndex ? "animate-bounce bg-red-500" : ""
            }`}
          >
            {item}
            {/* {index !== arr.length - 1  && ", "} */}
          </span>
        ))}
        {" ]"}
      </p>

      <div className="border-2 bg-gray-700 py-4 rounded-xl">
        <section className="px-4 rounded-lg  py-2 flex items-center justify-center">
          <div className="flex gap-4 font-mono">
            <h1 className="font-extrabold text-center text-gray-200">
              Push/Pop
            </h1>
            <select
              value={itemToPush}
              onChange={(e) => setItemToPush(e.target.value)}
              className="rounded-lg py-1 text-sm focus:outline-none"
            >
              <option>Item to push</option>
              <option value="😈">😈</option>
              <option value="😇">😇</option>
              <option value="😢">😢</option>
              <option value="👨🏽‍💻">👨🏽‍💻</option>
              <option value="🙈">🙈</option>
              <option value="❤️">❤️</option>
            </select>
            <button
              onClick={handlePushItem}
              className="px-2 bg-slate-500 hover:bg-slate-400 rounded-lg text-white"
            >
              Push
            </button>
            <button
              onClick={handlePop}
              className="px-2 bg-slate-500 hover:bg-slate-400 rounded-lg text-white"
            >
              Pop
            </button>
          </div>
        </section>

        <section className="px-4 mt-4 rounded-lg  py-2 flex items-center justify-center">
          <div className="flex gap-4 font-mono">
            <h1 className="font-extrabold text-center text-gray-200">
              Shift/Unshift
            </h1>
            <select
              value={itemToUnshift}
              onChange={(e) => setItemToUnshift(e.target.value)}
              className="rounded-lg py-1 text-sm focus:outline-none"
            >
              <option>Item to Unshift</option>
              <option value="😈">😈</option>
              <option value="😇">😇</option>
              <option value="😢">😢</option>
              <option value="👨🏽‍💻">👨🏽‍💻</option>
              <option value="🙈">🙈</option>
              <option value="❤️">❤️</option>
            </select>
            <button
              onClick={handleUnshiftItem}
              className="px-2 bg-slate-500 hover:bg-slate-400 rounded-lg text-white"
            >
              Unshift
            </button>
            <button
              onClick={handleShift}
              className="px-2 bg-slate-500 hover:bg-slate-400 rounded-lg text-white"
            >
              Shift
            </button>
          </div>
        </section>


        <section className="px-4 mt-4 rounded-lg  py-2 flex items-center justify-center">
          <div className="flex gap-4 font-mono">
            <h1 className="font-extrabold text-center text-gray-200">Splice</h1>
            <select value={itemSpliceStart} onChange={(e) => setItemSpliceStart(e.target.value)} className="rounded-lg py-1 text-sm focus:outline-none">
              <option value={null}>Start Index</option>
              {arr.map((item, i) => (
                <option value={i} key={i}>{i}</option>
              ))}
            </select>

            <select
              value={deleteAmount}
              onChange={(e) => setDeleteAmount(e.target.value)}
              className="rounded-lg py-1 text-sm focus:outline-none"
            >
              <option value={null}>delete count</option>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>

            <select
              value={itemToSplice}
              onChange={(e) => setItemToSplice(e.target.value)}
              className="rounded-lg py-1 text-sm focus:outline-none"
            >
              <option>Item to Splice</option>
              <option value="👾">👾</option>
              <option value="🧠">🧠</option>
              <option value="😢">😢</option>
              <option value="👨🏽‍💻">👨🏽‍💻</option>
              <option value="🙈">🙈</option>
              <option value="❤️">❤️</option>
            </select>

            <button
              onClick={handleSplice}
              className="px-2 bg-slate-500 hover:bg-slate-400 rounded-lg text-white"
            >
              Splice
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
