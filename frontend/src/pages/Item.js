import React from "react";


// React Component to display individual item
const Item = ({ name, id }) => (
  <div className="item-container">
    <div>
      <span className="item-label">Name:</span>
      {id}
    </div>
    <div>
      <span className="item-label">Category:</span>
      {name}
    </div>
  </div>
);

export default Item;