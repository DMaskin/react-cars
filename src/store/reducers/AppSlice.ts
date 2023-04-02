import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../model";

interface AppState {
  cars: ICar[],
  isLoading: boolean,
  error: string
}

const initialState: AppState = {
  cars: [] as ICar[],
  // cars: startCars,
  isLoading: false,
  error: ""
}

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setCars(state, action: PayloadAction<ICar[]>) {
      state.cars = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    updateCar(state, action: PayloadAction<ICar>) {
      state.cars = [...state.cars.map((car) =>
        car.id === action.payload.id ? {...action.payload} : car)]
    },
    deleteCar(state, action: PayloadAction<number>) {
      state.cars = [...state.cars.filter((car) => car.id !== action.payload)]
    }
  }
})

export default appSlice.reducer