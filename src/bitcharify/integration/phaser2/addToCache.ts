import { BaseTexture, Rectangle, Texture, type Game } from '@vpmedia/phaser';
import type { BitmapFontData, FontData } from './typedef.js';

interface BitmapFontCacheEntry {
  url: string | null;
  data: unknown;
  font: BitmapFontData;
  base: BaseTexture;
}

/**
 * Extracts bitmap font data from font data and base texture.
 * @param fontData - The font data object containing character and kerning information.
 * @param baseTexture - The base texture for the font.
 * @returns The processed bitmap font data with character and kerning information.
 */
const getBitmapFontData = (fontData: FontData, baseTexture: BaseTexture): BitmapFontData => {
  const xSpacing = fontData.xSpacing || 0;
  const ySpacing = fontData.ySpacing || 0;
  const bitmapFontData: BitmapFontData = {
    font: fontData.info[0].face,
    size: fontData.info[0].size,
    lineHeight: fontData.common[0].lineHeight + ySpacing,
    chars: {},
  };
  for (let index = 0; index < fontData.char.length; index += 1) {
    const char = fontData.char[index];
    const charCode = char.id;
    bitmapFontData.chars[charCode] = {
      x: char.x,
      y: char.y,
      width: char.width,
      height: char.height,
      xOffset: char.xoffset,
      yOffset: char.yoffset,
      xAdvance: char.xadvance + xSpacing,
      kerning: {},
    };
    const letter = bitmapFontData.chars[charCode];
    letter.texture = new Texture(
      baseTexture,
      new Rectangle(letter.x, letter.y, letter.width, letter.height),
      null,
      null,
    );
  }
  for (let index = 0; index < fontData.kerning.length; index += 1) {
    const kerning = fontData.kerning[index];
    const first = kerning.first;
    const second = kerning.second;
    const amount = kerning.amount;
    bitmapFontData.chars[second].kerning[first] = amount;
  }
  return bitmapFontData;
};

/**
 * Adds bitmap font data to the game's cache.
 * @param game - The Phaser game instance.
 * @param key - The cache key for the bitmap font.
 * @param fontData - The font data object containing character and kerning information.
 * @param textureSource - The canvas element containing the font texture.
 */
export const addToCache = (
  game: Game,
  key: string,
  fontData: FontData,
  textureSource: HTMLCanvasElement,
): void => {
  const baseTexture = new BaseTexture(textureSource);
  const cacheData: BitmapFontCacheEntry = {
    url: null,
    data: null,
    font: getBitmapFontData(fontData, baseTexture),
    base: baseTexture,
  };
  (game.cache._cache.bitmapFont as Record<string, BitmapFontCacheEntry>)[key] = cacheData;
};
