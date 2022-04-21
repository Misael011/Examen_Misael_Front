import React from "react";
import { MapContainer, TileLayer, Rectangle, Popup, LayersControl, LayerGroup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Pines from "./pines.js";
import Pastel from "./graficapastel";
import Rad from "./grafbarras";

const rectangle = [
  [20.379942, -102.024753],
  [20.326288, -101.986642],
];
const rectangledos = [
  [20.36208, -102.027574],
  [20.340799, -102.051974],
];
const bluekOptions = { color: "blue" };
const Mapa = (promps) => {
  console.log(promps, "props");
  const center = promps.coords
  //const center = [20.35, -102]
  return (
    <MapContainer
      key={promps.coords}
      center={promps.coords}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <LayersControl position="topleft">
      <LayersControl.Overlay name="Pines">
      <LayerGroup>
      <Pines />
      </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Zona1">
      <LayerGroup>
      <Rectangle bounds={rectangle} pathOptions={{ color: 'black' }}>
        <Popup minWidth={400} minHeight={400}>
          <h2>ZONA 2</h2>
          <Rad />
        </Popup>
        <Tooltip sticky><h2>ZONA 2</h2></Tooltip>
      </Rectangle>
      </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Zona2">
      <LayerGroup>
      <Rectangle bounds={rectangledos} pathOptions={bluekOptions}>
        <Popup minWidth={400} minHeight={400}>
          <h2>ZONA 1</h2>
          <Pastel />
        </Popup>
        <Tooltip sticky><h2>ZONA 1</h2></Tooltip>
      </Rectangle>
      </LayerGroup>
      </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default Mapa;
