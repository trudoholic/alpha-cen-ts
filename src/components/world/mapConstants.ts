import MapGrid from "./MapGrid";

export const ROWS = 11
export const COLS = 11

export const HeroR = ~~(ROWS/2)
export const HeroC = ~~(COLS/2)

export const cellX = 64
export const cellY = 64

export const gapX = 2
export const gapY = 2

export const GridX = 16
export const GridY = 16

export const MapW = COLS * (cellX + gapX) - gapX + 2 * GridX
export const MapH = ROWS * (cellY + gapY) - gapY + 2 * GridY

export const range = (n: number) => Array.from(Array(n).keys())
