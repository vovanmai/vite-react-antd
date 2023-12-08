import { memo } from 'react';

const Child =memo(({ reset }) => {
  console.log('Child component')
  return (
    <button onClick={reset}>Reset Count</button>
  )
});

export default Child
