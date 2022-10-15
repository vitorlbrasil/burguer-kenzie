import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .group {
    flex-direction: row;
  }

  .imgDiv {
    width: 5rem;
    height: 5rem;
    background-color: var(--grey-20);
    border-radius: 0.5rem;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .detailsDiv {
    width: 10rem;
    padding: 0.625rem;
    gap: 0.625rem;

    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--grey-100);
    }

    span {
      font-size: 0.75rem;
      color: var(--grey-50);
    }
  }

  .btnDiv {
    padding: 0.625rem;

    span {
      font-weight: 500;
      font-size: 0.75rem;
      color: var(--grey-50);
    }
  }
`;
