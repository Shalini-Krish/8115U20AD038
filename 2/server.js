const sortTrains = (trains) => {
    return trains.sort((train1, train2) => {
      // Sort by price in ascending order
      const priceComparison = train1.price - train2.price;
      if (priceComparison !== 0) {
        return priceComparison;
      }
  
      // Sort by tickets in descending order
      const ticketsComparison = train2.tickets - train1.tickets;
      if (ticketsComparison !== 0) {
        return ticketsComparison;
      }
  
      // Sort by departure time in descending order
      const departureTimeComparison = train2.departureTime - train1.departureTime;
      if (departureTimeComparison !== 0) {
        return departureTimeComparison;
      }
  
      // If all other factors are equal, return 0
      return 0;
    });
  };
  