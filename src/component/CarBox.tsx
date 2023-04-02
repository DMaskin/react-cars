import React from 'react'
import {useAppSelector} from "../hook/reduxHook";
import {Container, Row} from "react-bootstrap";
import {ICar} from "../model";
import {CarCard} from "./CarCard";

export function CarBox() {
  const {cars} = useAppSelector(state => state.appReducer)

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