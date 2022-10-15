import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  @media (min-width: 900px) {
    max-width: 24rem;
    padding: 1rem;
  }

  .cartTitle {
    width: 100%;
    height: 4rem;
    padding: 1.25rem;
    border-radius: 5px 5px 0 0;
    background-color: var(--primary-color);

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    color: #fff;
    font-weight: 700;
    font-size: 1.125rem;
  }

  .cartList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 15rem;
    overflow-y: auto;
    padding: 1rem;
    background-color: var(--grey-0);
    border-bottom: 2px solid var(--grey-20);
  }

  .emptyCart {
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    background-color: var(--grey-0);
    height: 8rem;
    border-radius: 0 0 5px 5px;

    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--grey-100);
    }

    p {
      font-size: 0.875rem;
      color: var(--grey-50);
    }
  }
`;
