import { useState, useCallback } from 'react';
import Child from "./Child";

const Parent = () => {
  console.log('Parent component')
  const [count, setCount] = useState(0)

  const resetCount = useCallback(() => {
    setCount(0)
  }, [setCount])

  const increment = () => {
    setCount((c) => c+ 1)
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      {count}
      <Child
        reset={resetCount}
      />
    </div>
  )
};

export default Parent
