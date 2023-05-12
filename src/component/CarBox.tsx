import React from "react"
import { Container, Row } from "react-bootstrap"
import { ICar } from "../model"
import { CarCard } from "./CarCard"
import { useAppSelector } from "../app/hooks"
import { selectCars, selectError } from "../feature/carSlice"

export function CarBox() {
  const cars = useAppSelector(selectCars)
  const error = useAppSelector(selectError)

  if (error) {
    return (
      <h2 className="m-5" style={{ color: "red" }}>
        {error}
      </h2>
    )
  }

  return (
    <Container className="mt-5">
      <Row>
        {cars.map((car: ICar) => (
          <CarCard key={car.id} car={car} />
        ))}
      </Row>
    </Container>
  )
}
