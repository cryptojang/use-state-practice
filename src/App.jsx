import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onClickButton = () => {
    setCount(count * 2);
  };

  // const onClickButton = (x) => () =>  {
  // setCount(count - x);
  // onClickButton(2)

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>
        <button
          onClick={onClickButton}
          className="mr-4 w-16 h-16 rounded-lg p-2 bg-green-500 active:bg-green-700"
        >
          *2
        </button>
        <button
          onClick={() => {
            setCount(count + 2);
          }}
          className="mr-4 w-16 h-16 rounded-lg p-2 bg-cyan-500 active:bg-blue-700"
        >
          +2
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="mr-4 w-16 h-16 rounded-lg p-2 bg-blue-500 active:bg-cyan-700"
        >
          +
        </button>
        현재 Count 값: {count}
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          className="ml-4 w-16 h-16 rounded-lg p-2 bg-red-500 active:bg-red-700"
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(count - 2);
          }}
          className="ml-4 w-16 h-16 rounded-lg p-2 bg-pink-500 active:bg-pink-700"
        >
          -2
        </button>
        <button
          onClick={() => {
            setCount(count / 2);
          }}
          className="ml-4 w-16 h-16 rounded-lg p-2 bg-purple-500 active:bg-purple-700"
        >
          /2
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            setCount(0);
          }}
          className="w-16 h-16 rounded-lg bg-gray-500 text-white active:bg-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
