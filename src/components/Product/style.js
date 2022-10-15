import styled from "styled-components";

export const StyledLi = styled.li`
  min-width: 17rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 2px solid var(--grey-20);
  border-radius: 5px;
  transition: 0.3s;
  @media (min-width: 900px) {
    min-width: initial;
    width: calc((100% - 2.5rem) / 3);
  }

  &:hover {
    transform: scale(1.025);
  }

  .imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 9rem;
    background-color: var(--grey-0);

    & img {
      height: 100%;
      object-fit: cover;
    }
  }

  .detailsContainer {
    padding: 0 1.25rem 1.25rem 1.25rem;
    gap: 0.875rem;

    h3 {
      font-weight: 700;
      font-size: 1.125rem;
    }

    span {
      font-size: 0.75rem;
      color: var(--grey-50);
    }

    p {
      color: var(--primary-color);
      font-weight: 600;
      font-size: 0.875rem;
    }
  }
`;
