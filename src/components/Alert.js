import React from "react";

export default function Alert(props) {
  return (
     props.alert && 
     <div className="container my-3">
    <div className={`alert alert-${props.alert.type}  fade show `} role="alert">
      <strong ><h4 className="text-center">{props.alert.msg}</h4></strong>
      
    </div>
    </div>
  );
}
