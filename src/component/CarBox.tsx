import React from 'react'
import {useAppSelector} from "../hook/reduxHook";
import {Container} from "react-bootstrap";

export function CarBox() {
  const {cars} = useAppSelector(state => state.appReducer)

  return (
    <Container>

    </Container>
  )
}