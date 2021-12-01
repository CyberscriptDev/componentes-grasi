import styled from "styled-components";
import { ITypography } from "./Interfaces";

export const Heading1 = styled.h3<ITypography>`
  display: block;
  font-size: var(--heading1);
  text-align: ${({ textAlign = "left" }) => `var(--text-${textAlign})`};
  text-decoration: ${({ decoration = "none" }) => `var(--${decoration})`};
  text-transform: ${({ transform = "none" }) => `var(--${transform})`};
  color: ${({ color = "title" }) => `var(--${color})`};
  font-weight: ${({ fontWeight = "bold" }) => `var(--${fontWeight})`};
  line-height: ${({ lineHeight = "md" }) => `var(--leading-${lineHeight})`};
`;

export const Heading2 = styled(Heading1)`
  font-size: var(--heading2);
`;

export const Heading3 = styled(Heading1)`
  font-size: var(--heading3);
`;

export const Heading4 = styled(Heading1)`
  font-size: var(--heading4);
`;

export const Heading5 = styled(Heading1)`
  font-size: var(--heading5);
`;

export const Heading6 = styled(Heading1)`
  font-size: var(--heading6);
`;

export const Body = styled.p<ITypography>`
  display: block;
  font-size: var(--body);
  text-align: ${({ textAlign = "left" }) => `var(--text-${textAlign})`};
  text-decoration: ${({ decoration = "none" }) => `var(--${decoration})`};
  text-transform: ${({ transform = "none" }) => `var(--${transform})`};
  color: ${({ color = "textBody" }) => `var(--${color})`};
  font-weight: ${({ fontWeight = "normal" }) => `var(--${fontWeight})`};
  line-height: ${({ lineHeight = "sm" }) => `var(--leading-${lineHeight})`};
`;

export const Caption = styled.small<ITypography>`
  display: block;
  font-size: var(--caption);
  text-align: ${({ textAlign = "left" }) => `var(--text-${textAlign})`};
  text-decoration: ${({ decoration = "none" }) => `var(--${decoration})`};
  text-transform: ${({ transform = "none" }) => `var(--${transform})`};
  color: ${({ color = "textCaption" }) => `var(--${color})`};
  font-weight: ${({ fontWeight = "normal" }) => `var(--${fontWeight})`};
  line-height: ${({ lineHeight = "none" }) => `var(--leading-${lineHeight})`};
`;

export const Label = styled(Caption)`
  font-size: var(--label);
`;
