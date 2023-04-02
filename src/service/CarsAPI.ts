import axios from "axios";
import {ICar} from "../model";

export class CarsAPI {
  static URL = "https://test.tspb.su/test-task"

  static async fetchCars() {
    const {data} = await axios.get<ICar[]>(`${this.URL}/vehicles`)
    return data
  }
}