import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 0.75rem 0;
  background-color: var(--grey-0);

  > .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    @media (min-width: 900px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 31rem;
    padding: 0.625rem;
    background-color: #fff;
    border: 2px solid var(--grey-20);
    border-radius: 0.5rem;

    input {
      width: 12rem;
      color: var(--grey-20);
    }
  }
`;
