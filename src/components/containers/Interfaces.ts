export interface IContainer {
  verticalMargin?: string;
  padding?: string;
  gap?: string;
}

export interface IMain extends IContainer {
  maxWidth?: number;
}

export interface ICard extends IContainer {
  bgColor?: string;
  borderColor?: string;
  color?: string;
  borderRadius?: string;
  shadow?: string;
}

export interface IRow extends IContainer {
  justifyContent?: string;
  alignItems?: string;
}