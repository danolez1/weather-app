// https://api.weatherapi.com/v1/current.json?key=cb10af1b8cab4c299ba61105243001&q=tokyo

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export interface Slug {
  params: { [k: string]: string };
}

export async function GET(request: NextRequest, { params }: Slug) {
  const { data } = await axios.get(
    `${process.env.PUBLIC_NEXT_WEATHER_ENDPOINT}forecast.json?key=${process.env.PUBLIC_NEXT_WEATHER_API}&q=${params.location}&days=8`,
  );
  return NextResponse.json(data);
}
