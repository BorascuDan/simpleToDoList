import React from "react";
import { useState } from "react";
function List({ value, clic3, id }) {
  const [check, setCheck] = useState(true);

  function clic(event) {
    event.stopPropagation();
    setCheck(!check);
  }

  const style = check
    ? {}
    : { textDecoration: "line-through", color: "#fdcb6e" };

  return (
    <div
      onClick={() => {
        clic3(id);
      }}
    >
      <li>
        <span style={style}>{value}</span>
        <button className="check" onClick={clic}>
          <span>{check ? "check" : "uncheck"}</span>
        </button>
      </li>
    </div>
  );
}

export default List;
