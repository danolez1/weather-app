import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4em;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  background-color: rgba(var(--accent-rgb));
`;

export const Title = styled.h2`
  color: black;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  position: relative;
  margin: 0;
  padding: 1rem;
  font-size: large;
  width: 20em;
  text-align: center;
  background-color: rgba(var(--accent-rgb), 0.5);
  border: 1px solid rgba(var(--primary-rgb));
  border-radius: var(--border-radius);

  @media (min-width: 768px) {
    width: 25em;
  }

  @media (min-width: 1024px) {
    width: 30em;
  }
`;

export const SearchButton = styled.button`
  margin-left: 1em; /* Adjust the margin as needed */
  padding: 1rem;
  background-color: rgba(var(--primary-rgb));
  border-radius: var(--border-radius);
  border: none;
  color: white;
  cursor: pointer;
`;

export const InformationContainer = styled.div`
  border: 1px solid rgba(var(--primary-rgb), 0.3);
  border-radius: var(--border-radius);
  border-radius: 8px;
  padding: 1rem 1.2rem;
  width: 25em;
  overflow-x: clip;
  height: auto;

  @media (min-width: 768px) {
    width: 37em;
  }

  @media (min-width: 1024px) {
    width: 50em;
  }
`;

export const Information = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  // width: 90px;
`;

export const InfoDescrip = styled.h4`
  color: grey;
`;

export const InfoItem = styled.div`
  color: black;
  height: 44px;
  margin-top: 20px;
`;
