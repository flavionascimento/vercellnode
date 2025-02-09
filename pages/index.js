
import { useState } from 'react';


function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Bem vindo a Highz</h1>
      <p>Nascemosopara revolucionar o seu BPO
    .</p>
      <div>
        <p>Contador: {count}</p>
        <button onClick={handleIncrement}>Aumentar</button>
      </div>
    </div>
  );
}

export default Home;