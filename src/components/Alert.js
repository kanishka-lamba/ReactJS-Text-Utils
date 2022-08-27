import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div>
          <div className={`alert alert-${props.alert.type}`} role="alert">
            {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
