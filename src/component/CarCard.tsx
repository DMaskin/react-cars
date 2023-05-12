import React from "react"
import { Button, Card } from "react-bootstrap"
import { ICar } from "../model"
import { UpdateWindow } from "./modal/UpdateWindow"
import { useAppDispatch } from "../app/hooks"
import { deleteCar } from "../feature/carSlice"

export function CarCard({ car }: { car: ICar }) {
  const [modalShow, setModalShow] = React.useState(false)
  const dispatch = useAppDispatch()

  const deleteHandler = () => {
    dispatch(deleteCar(car.id))
  }

  return (
    <>
      <Card
        bg={"light"}
        text={"dark"}
        style={{
          width: "18rem",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        className="mx-2 my-2 p-0"
      >
        <Card.Header>
          <strong>{car.name}</strong>
        </Card.Header>
        <Card.Body>
          <Card.Title>Модель: {car.model}</Card.Title>
          <div className="d-flex flex-column mb">
            <span>Год: {car.year}</span>
            <div className="d-flex flex-row gap-2 align-items-center">
              Цвет:
              <div
                style={{ backgroundColor: car.color, width: "20px", height: "20px", border: "grey solid 1px" }}
              ></div>
            </div>
            <div>Цена: {car.price}</div>
          </div>
          <div className="d-flex gap-2 justify-content-around">
            <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
              Обновить
            </Button>
            <Button variant="outline-danger" onClick={deleteHandler}>
              Удалить
            </Button>
          </div>
        </Card.Body>
      </Card>
      <UpdateWindow car={car} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}
