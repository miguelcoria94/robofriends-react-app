import React from 'react';

const Card = (props) => {
  const { name, email, id } = props;
  return (
    <div className="tc bg-white dib br3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?100x100`} alt="robots"/>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;