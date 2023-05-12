import React from "react"
import { LayerGroup, LayersControl, Marker, Popup, TileLayer } from "react-leaflet"
import { CarCard } from "../CarCard"
import { useAppSelector } from "../../app/hooks"
import { selectCars } from "../../feature/carSlice"

export function MapLayers() {
  const cars = useAppSelector(selectCars)

  return (
    <>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Basic Map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Topo Map">
          <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayerGroup>
          {cars.map((car) => (
            <Marker key={car.id} position={[car.latitude, car.longitude]} title={`${car.name} ${car.model}`}>
              <Popup>
                <CarCard car={car} />
              </Popup>
              123
            </Marker>
          ))}
          )
        </LayerGroup>
      </LayersControl>
    </>
  )
}
