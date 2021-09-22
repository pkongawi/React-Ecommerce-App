import React from "react";
import { render } from "react-dom";

function Title(name, title) {
  return (
    <div>
      <div className="row">
        <div className="col-10 mx-auto my-2 text-centre text-title">
          <h1 className="text-capitalize font-weight-bold">
            {name}
            <strong className="text-blue">{title}</strong>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Title;
