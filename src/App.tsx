import { useState } from 'react';

import { Button } from '@components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container flex justify-center items-center gap-3 mt-3">
      <h1 className="text-3xl font-bold">Counter</h1>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}

export default App;
