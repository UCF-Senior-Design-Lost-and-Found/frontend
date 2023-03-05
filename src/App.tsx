import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count === 69){
      alert('NICE');
    }
  }, [count])

  return (
    <div className="flex h-screen items-center justify-center bg-slate-500">
      <button 
        className="border shadow-md p-2 rounded-md bg-white" 
        onClick={() => {setCount((count) => count + 1)}}
      >
          Count is {count}
      </button>
    </div>
  );
}

export default App;
