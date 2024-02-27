"use client";
/* eslint-disable @next/next/no-img-element */
import { useStateMachine } from "../controller";

import {
  BackBtn,
  Center,
  InfoDescrip,
  InfoItem,
  Information,
  InformationContainer,
  Item,
  Main,
  SearchBar,
  SearchButton,
  SearchContainer,
  Title,
} from "../components";
import Link from "next/link";

export default function Page() {
  const { data, query, day, setQuery, handleSearch } = useStateMachine(
    (state) => state,
  );

  const forecast = data.forecast.forecastday.find((cast) => cast.date == day);

  const weatherInfo = [
    {
      description: "Min Temp.",
      value: `${forecast?.day.mintemp_c}°C`,
    },
    {
      description: "Avg. Temp.",
      value: `${forecast?.day.avgtemp_c}°C`,
    },
    {
      description: "Max Temp.",
      value: `${forecast?.day.maxtemp_c}°C`,
    },
    {
      description: "Humidity",
      value: forecast?.day.avghumidity,
    },
    {
      description: "Probability of Rain",
      value: `${forecast?.day.daily_chance_of_rain}%`,
    },
    {
      description: "Probability of Snow",
      value: `${forecast?.day.daily_chance_of_snow}%`,
    },
    {
      description: "Wind Speed",
      value: forecast?.day.maxwind_kph,
    },
    {
      description: "Precipitation",
      value: `${forecast?.day.totalprecip_mm}mm`,
    },
    {
      description: "UV Rays",
      value: forecast?.day.uv,
    },
    {
      description: "Visibility",
      value: `${forecast?.day.avgvis_km}km`,
    },
  ];
  return (
    <Main>
      <Link href={"/"}>
        <BackBtn src="arrow-left.svg" alt="back btn" />
      </Link>
      <Title>{day}</Title>
      <SearchContainer>
        <SearchBar
          placeholder="Location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      {data.location.region.length > 0 && (
        <h3>{`${data.location.region}, ${data.location.country}`}</h3>
      )}

      <InformationContainer>
        <h3>Current Weather</h3>
        <br />
        {forecast != undefined && (
          <Center>
            <Information>
              <Item>
                <img
                  src={forecast?.day.condition.icon}
                  alt="Weather Condition"
                />
                <InfoDescrip>{forecast?.day.condition.text}</InfoDescrip>
              </Item>

              {weatherInfo.map((info, idx) => (
                <Item key={idx}>
                  <InfoItem>
                    <h2>{info.value}</h2>
                  </InfoItem>
                  <InfoDescrip>{info.description}</InfoDescrip>
                </Item>
              ))}
            </Information>
          </Center>
        )}
      </InformationContainer>
    </Main>
  );
}
