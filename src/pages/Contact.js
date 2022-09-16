import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [planetId, setPlanetId] = useState(1);
  const [planetInfo, setPlanetInfo] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://swapi.dev/api/planets/${planetId}/`)
      .then((data) => data.json())
      .then((data) => {
        setPlanetInfo(data);
        setIsLoading(false);
      });
  }, [planetId]);

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h1>Planet name - {planetInfo.name}</h1>
          <p>Population - {planetInfo.population}</p>
        </div>
      )}
      <button
        disabled={planetId <= 1}
        onClick={() => {
          setPlanetId((prevState) => {
            return prevState - 1;
          });
        }}
      >
        Prev
      </button>
      <button
        disabled={planetId >= 10}
        onClick={() => {
          setPlanetId((prevState) => {
            return prevState + 1;
          });
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Contact;
