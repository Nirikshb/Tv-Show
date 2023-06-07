import React, { useState, useEffect } from 'react';
import ShowList from './Components/ShowList/ShowList';
import ShowSummary from './Components/ShowSummary/ShowSummary';
import './App.css';
import { fetchShows } from './Components/Api';
import { saveBookingDetails } from './Components/Storage';

const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShows();
        setShows(data);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };
    
    fetchData();
  }, []);

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = (showName, formData) => {
    saveBookingDetails(showName, formData);
    
  };

  return (
    <div className="App">
      {selectedShow ? (
        <ShowSummary show={selectedShow} onBookTicket={handleBookTicket} />
      ) : (
        <ShowList shows={shows} onShowClick={handleShowClick} />
      )}
    </div>
  );
};

export default App;
