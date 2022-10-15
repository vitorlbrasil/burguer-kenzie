import styled from "styled-components";
import { css } from "styled-components";

export const ThemeButton = styled.button`
  cursor: pointer;
  font-weight: 600;
  padding: 0 1.25rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  height: ${(props) => {
    switch (props.buttonSize) {
      case "medium":
        return "3.75rem";
      case "small":
        return "2.5rem";
      default:
        return false;
    }
  }};

  ${(props) => {
    switch (props.buttonColor) {
      case "green":
        return css`
          color: #fff;
        `;
      case "grey":
        return css`
          color: var(--grey-50);
          &:hover {
            color: var(--grey-20);
          }
        `;
      default:
        return false;
    }
  }};

  ${(props) => {
    switch (props.buttonColor) {
      case "green":
        return css`
          background-color: var(--primary-color);
          &:hover {
            background-color: var(--primary-color-50);
          }
        `;
      case "grey":
        return css`
          background-color: var(--grey-20);
          &:hover {
            background-color: var(--grey-50);
          }
        `;
      default:
        return false;
    }
  }};
`;
