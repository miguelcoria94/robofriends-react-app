import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-red dib br3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;