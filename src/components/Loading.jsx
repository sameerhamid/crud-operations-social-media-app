import React from "react";

const Loading = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {items.map((item, key) => (
        <div className="card" aria-hidden="true" key={key}>
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a
              className="btn btn-primary disabled placeholder col-6"
              aria-disabled="true"></a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Loading;
