import React from 'react';

import '@/index.css';

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex justify-center align-middle h-screen">
      <div className="bg-white m-auto p-10 rounded-xl w-1/2 text-center">
        <div className="underline text-5xl">Hello World</div>
        <div className="flex justify-center m-5">
          <button className="text-2xl m-auto w-full bg-slate-200 hover:bg-slate-300 p-5 rounded-2xl" onClick={() => setCount(count + 1)}>
            Click Count:
            {count}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
