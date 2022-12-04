import { GoogleMap, Marker } from "@react-google-maps/api";
import styled from "styled-components";
import iconBaw from "../assets/busbaw.png"
import iconImg  from "../assets/bus3.png"
import { useEffect } from "react";
import { useState, useRef } from "react";


const initialCenter = { lat: 22.944967420710498, lng: -109.94538756232878 };

export const MapCard = ({ isLoaded, trucks, driver }) => {
  const [center, setCenter] = useState(initialCenter);
  let mapRef = useRef(null);

  useEffect(() =>{
    if(driver?.id){
      setCenter({lat: driver.latitude, lng: driver.longitude});
    }
  },[driver])


  if (!isLoaded) return <h1>Cargando</h1>;

  console.log({trucks})
  console.log({driver})
  

  return (
    <Card>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        ref={mapRef}
      >
        <Marker position={center} />

        {trucks.map((item) => {
          return (
            <Marker
              key={item.driverId}
              position={{ lat: item.latitude, lng: item.longitude }}
              icon={driver?.id === item.driverId ? iconImg : iconBaw}

            />
          );
        })}
      </GoogleMap>
    </Card>
  );
};

const Card = styled.div`
  width: 60%;
  height: 70vh;
  background: red;

  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px -2px #706e6eaf;
`;
