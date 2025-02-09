
import { useState } from 'react';


function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Welcome cccccto My Next.js App</h1>
      <p>This is the home page of your application.</p>
      <div>
        <p>Contador: {count}</p>
        <button onClick={handleIncrement}>Aumentar</button>
      </div>
    </div>
  );
}

export default Home;