import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen items-center justify-center">
      <button className="border p-2 rounded-md" onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  );
}

export default App;
