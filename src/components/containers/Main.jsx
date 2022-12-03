import styled from "styled-components";
import { FlexContainer } from "../FlexContainer";
import { InformationCard } from "../InformationCard";
import { MapCard } from "../MapCard";

import { useState } from "react";

import { useJsApiLoader } from "@react-google-maps/api";
import { useAquacabo } from "../../hooks/useAquacabo";
import { Container } from "react-bootstrap";

const initialDriver = {
  id: 0,
  email: "example@gmail.com",
  name: "nombre",
  phone: "624123457",
  type: "Conductor",
  lastStatus: 1669653101,
};

export const Main = () => {
  const { drivers, clients, trucks } = useAquacabo();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCpwwNySUSJoOdaj3le3Xxw4agVol3342k",
  });
  const [driver, setDriver] = useState(initialDriver);

  const selectDriver = (data) => {
    console.log({ data });
    const truckLocation = trucks.find((truck) => truck.driverId === data.id);
    setDriver({ ...data, ...truckLocation });
  };

  return (
    <Container >
      <h1 className="text-center my-2">Supervisión</h1>
      <StyledMain jc_se gap="2rem">
        <InformationCard
          drivers={drivers}
          selectDriver={selectDriver}
          driver={driver}
        />
        <MapCard isLoaded={isLoaded} trucks={trucks} driver={driver} />
      </StyledMain>
    </Container>
  );
};

const StyledMain = styled(FlexContainer)`
  margin-top: 2rem;
`;


