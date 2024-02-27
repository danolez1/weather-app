import { Weather } from "@/app/model";
import axios from "axios";

class WeatherApi {
  async getInfo(location: string): Promise<Weather | null> {
    try {
      const { data } = await axios.get(`/api/${location}`);
      return data;
    } catch (err) {
      return null;
    }
  }
}

export const weatherApi = new WeatherApi();
