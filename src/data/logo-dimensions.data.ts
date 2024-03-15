export type LogoDimension = {
  width: number;
  height: number;
};
export type LogoStateType = "hero" | "default";
export type LogoDimensions = Record<LogoStateType, LogoDimension>;

export const LOGO_DIMENSIONS: LogoDimensions = {
  hero: { width: 125, height: 60 },
  default: { width: 100, height: 50 },
};
