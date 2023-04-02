import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../model";

const startCars: ICar[] = [{
  "id": 1,
  "name": "Toyota",
  "model": "Camry",
  "year": 2021,
  "color": "red",
  "price": 21000,
  "latitude": 55.753332,
  "longitude": 37.621676
}, {
  "id": 2,
  "name": "BMW",
  "model": "X5",
  "year": 2015,
  "color": "black",
  "price": 20000,
  "latitude": 59.986607,
  "longitude": 30.321435
}, {
  "id": 3,
  "name": "Mercedes",
  "model": "S500",
  "year": 2009,
  "color": "white",
  "price": 40000,
  "latitude": 59.950317,
  "longitude": 30.31799
}]

interface AppState {
  cars: ICar[],
  isLoading: boolean,
  error: string
}

const initialState: AppState = {
  // cars: [] as ICar[],
  cars: startCars,
  isLoading: false,
  error: ""
}

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setCars(state, action: PayloadAction<ICar[]>) {
      state.cars = action.payload
    }
  }
})

export default appSlice.reducer