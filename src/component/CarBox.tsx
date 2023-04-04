import React from 'react'
import {useAppSelector} from "../hook/reduxHook";
import {Container, Row} from "react-bootstrap";
import {ICar} from "../model";
import {CarCard} from "./CarCard";

export function CarBox() {
  const {cars, error} = useAppSelector(state => state.appReducer)

  if (error) {
    return <h2 className="m-5" style={{color: "red"}}>{error}</h2>
  }

  return (
    <Container className="mt-5">
      <Row>
        {cars.map((car: ICar) =>
          <CarCard key={car.id} car={car}/>
        )}
      </Row>
    </Container>
  )
}