import styled from "styled-components";

export const StyledDiv = styled.div`
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  border-radius: 0 0 5px 5px;
  background-color: var(--grey-0);

  .priceWrapper {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    .totalTitle {
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--grey-100);
    }

    .price {
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--grey-50);
    }
  }

  button {
    width: 100%;
  }
`;
