import styled from "styled-components";

export const StyledUl = styled.ul`
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  @media (min-width: 900px) {
    overflow-x: initial;
    flex-wrap: wrap;
  }
`;
