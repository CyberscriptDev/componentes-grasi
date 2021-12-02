import styled from "styled-components";
import { ICard, IContainer, IMain, IRow } from "./Interfaces";

export const Main = styled.main<IMain>`
  display: flex;
  flex-direction: column;
  margin: ${({ verticalMargin = "lg" }) => `var(--margin-${verticalMargin})`} auto;
  gap: ${({ gap = "lg" }) => `var(--gap-${gap})`};
  max-width: ${({ maxWidth = 1120 }) => `${maxWidth}px`};
  padding: ${({ padding = "lg" }) => `var(--padding-${padding})`};
`;

export const Grid = styled.section<IContainer>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({ gap = "md" }) => `var(--gap-${gap})`};
  margin: ${({ verticalMargin = "md" }) => `var(--margin-${verticalMargin})`} 0;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.article<ICard>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap = "sm" }) => `var(--gap-${gap})`};
  background-color: ${({ bgColor = "white" }) => `var(--${bgColor})`};
  border: 1px solid ${({ borderColor = "border" }) => `var(--${borderColor})`};
  border-radius: ${({ borderRadius = "squared" }) =>
    `var(--radius-${borderRadius})`};
  box-shadow: ${({ shadow = "none" }) => `var(--shadow-${shadow})`};
  padding: ${({ padding = "lg" }) => `var(--padding-${padding})`};
`;

export const Column = styled.article<IContainer>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap = "xs" }) => `var(--gap-${gap})`};
`;

export const Row = styled.article<IRow>`
  display: flex;
  gap: ${({ gap = "sm" }) => `var(--gap-${gap})`};
  justify-content: ${({ justifyContent = "between" }) =>
    `var(--justify-${justifyContent})`};
  align-items: ${({ alignItems = "start" }) => `var(--items-${alignItems})`};
`;
