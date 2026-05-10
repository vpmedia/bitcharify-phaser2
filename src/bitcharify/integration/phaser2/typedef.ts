import type { Texture } from '@vpmedia/phaser';

export const TYPE_CHECKING = true;

export interface FontInfo {
  face: string | string[];
  size: number;
}

export interface FontCommon {
  lineHeight: number;
}

export interface FontPage {
  id: number;
  file: string;
}

export interface FontChar {
  id: number;
  page: number;
  x: number;
  y: number;
  width: number;
  height: number;
  xoffset: number;
  yoffset: number;
  xadvance: number;
}

export interface FontKerning {
  first: number;
  second: number;
  amount: number;
}

export interface FontData {
  /** The font metadata information. */
  info: FontInfo[];
  /** The common font properties. */
  common: FontCommon[];
  /** The font page information. */
  page: FontPage[];
  /** The character data for each glyph. */
  char: FontChar[];
  /** The kerning pairs for character spacing. */
  kerning: FontKerning[];
  /** The distance field data for the font. */
  distanceField: number[];
  /** Font X spacing. */
  xSpacing?: number;
  /** Font Y spacing. */
  ySpacing?: number;
}

export interface BitmapFontChar {
  x: number;
  y: number;
  width: number;
  height: number;
  xOffset: number;
  yOffset: number;
  xAdvance: number;
  kerning: Record<number, number>;
  texture?: Texture;
}

export interface BitmapFontData {
  font: string | string[];
  size: number;
  lineHeight: number;
  chars: Record<number, BitmapFontChar>;
}
