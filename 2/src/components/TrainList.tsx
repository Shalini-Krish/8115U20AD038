import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';



interface Train {
  id: number;
  name: string;
  departureTime: string;
  arrivalTime: string;
  seatAvailability: {
    sleeper: number;
    ac: number;
  };
  prices: {
    sleeper: number;
    ac: number;
  };
}

const TrainList: React.FC = () => {
  
  const [trains, setTrains] = React.useState<Train[]>([]);

  React.useEffect(() => {
    axios.get('https://api.johndoe.com/trains', {
      headers: {
        Authorization: `Bearer api`,
      },
    })
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
  <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Train Name</th>
      <th scope="col">First</th>
      <th scope="col">Departure Time</th>
      <th scope="col">Arrival Time</th>
      <th scope="col">Sleeper Availability</th>
      <th scope="col">AC Availability</th>
      <th scope="col">Sleeper Price</th>
      <th scope="col">AC Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {trains.map((train) => (
        <><td>{train.name}</td><td>{train.departureTime}</td><td>{train.arrivalTime}</td><td>{train.seatAvailability.sleeper}</td><td>{train.seatAvailability.ac}</td><td>{train.prices.sleeper}</td><td>{train.prices.ac}</td></>)
      )}
      
    </tr>
    
  </tbody>
  </table>
  </>
  )}



export default TrainList;
