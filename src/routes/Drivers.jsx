import React from "react";
import DriverTable from "../components/DriverTable";

const Drivers = () => {

  

  return (
    <div className="container my-3">
    <div className="row">
      <div className="col-md-12">
        <h1 className="text-center">Conductores</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <DriverTable />
      </div>
    </div>
  </div>
  );
};

export default Drivers;
