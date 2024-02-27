"use client";
/* eslint-disable @next/next/no-img-element */

import { format } from "date-fns";
import Link from "next/link";
import {
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
} from "./components";
import { useStateMachine } from "./controller";

export default function Home() {
  const { loading, data, query, setDay, setQuery, handleSearch } =
    useStateMachine((state) => state);

  const weatherInfo = [
    {
      description: "Temperature",
      value: `${data.current.temp_c}°C`,
    },
    {
      description: "Humidity",
      value: data.current.humidity,
    },
    {
      description: "Cloud",
      value: data.current.cloud,
    },
    {
      description: "Wind Speed",
      value: `${data.current.wind_kph}km/h`,
    },
    {
      description: "Wind Direction",
      value: data.current.wind_dir,
    },
  ];
  return (
    <Main>
      <Title>Weather Forecast App</Title>

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
        {data.current.last_updated_epoch > 0 && (
          <Center>
            <Information>
              <Item>
                <img
                  src={data.current.condition.icon}
                  alt="Weather Condition"
                />
                <InfoDescrip>{data.current.condition.text}</InfoDescrip>
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

      <InformationContainer>
        <h3>Week Forecast</h3>
        <br />
        <Center>
          <Information>
            {data.forecast.forecastday.map((data, id) => {
              const date = new Date(data.date);
              return (
                id > 0 && (
                  <Link
                    key={id}
                    onClick={() => setDay(data.date)}
                    href={"/day"}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Item>
                      <h2>{date.getDate()+1}</h2>
                      <img
                        src={data.day.condition.icon}
                        alt="Weather Condition"
                      />
                      <InfoDescrip> {format(date, "eeee")}</InfoDescrip>
                    </Item>
                  </Link>
                )
              );
            })}
          </Information>
        </Center>
      </InformationContainer>
    </Main>
  );
}
