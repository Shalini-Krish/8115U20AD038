import axios from 'axios';
import React from 'react';

const App: React.FC = () => {
  const [numbers, setNumbers] = React.useState<number[]>([]);

  const fetchNumbers = async () => {
    const response = await axios.get('/numbers', {
      params: {
        url: ['http://20.244.56.144/numbers/primes', 'http://20.244.56.144/numbers/fibo','http://20.244.56.144/numbers/odd','http://20.244.56.144/numbers/rand'],
      },
    });

    setNumbers(response.data);
  };

  React.useEffect(() => {
    fetchNumbers();
  }, []);

  return (
    <div>
      <h1>Number Management</h1>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
