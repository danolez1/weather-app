import { create } from "zustand";
import { Weather } from "../model";
import { weatherApi } from "../api/[location]";
import toast from "react-hot-toast";

interface GlobalState {
  day: string;
  query: string;
  loading: boolean;
  data: Weather;
  setDay: (day: string) => void;
  setQuery: (location: string) => void;
  setData: (data: Weather) => void;
  handleSearch: () => Promise<void>;
}

const initialState: Pick<GlobalState, "day" | "query" | "data" | "loading"> = {
  day: "",
  loading: false,
  query: "",
  data: {
    location: {
      name: "",
      region: "",
      country: "",
      lat: 0,
      lon: 0,
      tz_id: "",
      localtime_epoch: 0,
      localtime: "",
    },
    current: {
      last_updated_epoch: 0,
      last_updated: "",
      temp_c: 0,
      temp_f: 0,
      is_day: 0,
      condition: {
        text: "Weather",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 0,
      },
      wind_mph: 0,
      wind_kph: 0,
      wind_degree: 0,
      wind_dir: "NIL",
      pressure_mb: 0,
      pressure_in: 0,
      precip_mm: 0,
      precip_in: 0,
      humidity: 0,
      cloud: 0,
      feelslike_c: 0,
      feelslike_f: 0,
      vis_km: 0,
      vis_miles: 0,
      uv: 0,
      gust_mph: 0,
      gust_kph: 0,
    },
    forecast: {
      forecastday: [],
    },
  },
};

export const useStateMachine = create<GlobalState>((set, get) => ({
  ...initialState,
  setDay: (day: string) => set((state) => ({ ...state, day })),
  setQuery: (query: string) =>
    set((state: GlobalState) => ({ ...state, query })),
  setData: (data: Weather) => set((state: GlobalState) => ({ ...state, data })),
  handleSearch: async () => {
    set((state: GlobalState) => ({ ...state, loading: true }));
    const query = get().query;
    const data = await toast.promise(weatherApi.getInfo(query), {
      loading: `Loading weather information for ${query}  ... `,
      success: (result) => {
        if (result == null) {
          return `Weather information for ${query} could not be found`;
        }
        return "Weather information loaded.";
      },
      error: "Something went wrong.",
    });
    if (data != null)
      set((state: GlobalState) => ({ ...state, data, loading: false }));
  },
}));
