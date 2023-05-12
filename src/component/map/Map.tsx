import React from "react"
import { MapContainer, ZoomControl } from "react-leaflet"
import { MapLayers } from "./MapLayers"

export function Map() {
  return (
    <>
      <MapContainer
        center={[55.753332, 37.621676]}
        zoom={5}
        zoomControl={false}
        style={{ height: "70vh", width: "100%" }}
      >
        <MapLayers />
        <ZoomControl position="topright" />
      </MapContainer>
    </>
  )
}
