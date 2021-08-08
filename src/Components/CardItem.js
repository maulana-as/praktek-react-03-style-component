import React from 'react';

function CardItem(props) {
  const { image, title, date } = props.news;
  return (
    <div className="card mb-3 mt-4" style={{ width: '600px' }}>
      <div className="row">
        <div className="col-6">
          <img className="img-fluid" src={image} alt="img-left-side" />
        </div>
        <div className="col-6">
          <p className="fw-bold">{title}</p>
          <small className="text-muted">{date}</small>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
