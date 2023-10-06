import React from 'react';
import  'bootstrap/dist/css/bootstrap.css';

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

const TrainDetails: React.FC<{ train: Train }> = ({ train }) => {
  return (<>
    <div className="card">
      <div className="cardbody">
        <div className="card-title">{train.name}</div>
        <div className="card-subtitle">Departure time: {train.departureTime}</div>
        <div className="card-subtitle">Arrival time: {train.arrivalTime}</div>
        <h3>Seat availability</h3>
        <ul>
          <li>Sleeper: {train.seatAvailability.sleeper}</li>
          <li>AC: {train.seatAvailability.ac}</li>
        </ul>
        <h3>Prices</h3>
        <ul>
          <li>Sleeper: {train.prices.sleeper}</li>
          <li>AC: {train.prices.ac}</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default TrainDetails;
