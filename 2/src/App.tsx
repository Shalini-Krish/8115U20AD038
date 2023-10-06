import axios from 'axios';
import React from 'react';
import TrainDetails from './components/TrainDetails';
import TrainList from './components/TrainList';


const App: React.FC = () => {
  const [train, setTrain] = React.useState<null>(null);

  React.useEffect(() => {
    axios.get('https://api.johndoe.com/trains/1', {
      headers: {
        Authorization: `Bearer api`,
      },
    })
      .then((response) => {
        setTrain(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    
    <div>
      <div>
      <h1>Train List</h1>
      <TrainList />
    </div>
      <h1>Train Details</h1>
      {train && <TrainDetails train={train} />}
    </div>
  );
};

export default App;
