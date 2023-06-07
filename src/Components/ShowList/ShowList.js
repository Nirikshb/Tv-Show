import React from 'react';
import './ShowList.css';

const ShowList = ({ shows, onShowClick }) => {
  return (
    <div className="ShowList">
      <h2 className="title">ShowList</h2>
      
      <div className="show-list">
        {shows.map((show) => (
          <div key={show.id} className="show-card">
            <h3>{show.name}</h3>
            <img src={show.image.medium} alt={show.name} />
            <br />
            <button onClick={() => onShowClick(show)}>Show Summary</button>
          </div>
       
       ))}
      </div>
    </div>
  );
};

export default ShowList;
