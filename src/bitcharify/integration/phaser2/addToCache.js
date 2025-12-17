import { BaseTexture, Rectangle, Texture } from '@vpmedia/phaser';

/**
 * Extracts bitmap font data from font data and base texture.
 * @param {object} fontData - The font data object containing character and kerning information.
 * @param {BaseTexture} baseTexture - The base texture for the font.
 * @returns {object} The processed bitmap font data with character and kerning information.
 */
const getBitmapFontData = (fontData, baseTexture) => {
  const xSpacing = fontData.xSpacing || 0;
  const ySpacing = fontData.ySpacing || 0;
  const bitmapFontData = {
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
      null
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
 * @param {import('@vpmedia/phaser').Game} game - The Phaser game instance.
 * @param {string} key - The cache key for the bitmap font.
 * @param {object} fontData - The font data object containing character and kerning information.
 * @param {HTMLCanvasElement} textureSource - The canvas element containing the font texture.
 */
export const addToCache = (game, key, fontData, textureSource) => {
  const baseTexture = new BaseTexture(textureSource, null);
  const cacheData = {
    url: null,
    data: null,
    font: null,
    base: baseTexture,
  };
  cacheData.font = getBitmapFontData(fontData, baseTexture);
  game.cache._cache.bitmapFont[key] = cacheData;
};
