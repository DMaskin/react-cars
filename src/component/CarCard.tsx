import React from 'react'
import {Button, Card} from 'react-bootstrap';
import {ICar} from "../model";
import {Window} from "./Window";
import {useAppDispatch} from "../hook/reduxHook";
import {appSlice} from "../store/reducers/AppSlice";

export function CarCard({car}: { car: ICar }) {
  const [modalShow, setModalShow] = React.useState(false);
  const {deleteCar} = appSlice.actions
  const dispatch = useAppDispatch()

  const deleteHandler = () => {
    dispatch(deleteCar(car.id))
  }

  return (
    <>
      <Card bg={"light"}
            text={"dark"}
            style={{
              width: '18rem',
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)"
            }}
            className="mx-2 my-2 p-0"
      >
        <Card.Header><strong>{car.name}</strong></Card.Header>
        <Card.Body>
          <Card.Title>Модель: {car.model}</Card.Title>
          <Card.Text className="d-flex flex-column mb">
            <span>Год: {car.year}</span>
            <span>Цвет: {car.color}</span>
            <span>Цена: {car.price}</span>
          </Card.Text>
          <div className="d-flex gap-2 justify-content-around">
            <Button variant="outline-secondary"
                    onClick={() => setModalShow(true)}
            >
              Обновить
            </Button>
            <Button variant="outline-danger"
                    onClick={deleteHandler}
            >
              Удалить
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Window car={car}
              show={modalShow}
              onHide={() => setModalShow(false)}
      />
    </>
  )
}