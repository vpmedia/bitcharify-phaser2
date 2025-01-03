import { BaseTexture, Rectangle, Texture } from '@vpmedia/phaser';

/**
 * TBD.
 * @param {object} fontData - TBD.
 * @param {BaseTexture} baseTexture - TBD.
 * @returns {object} TBD.
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
 * TBD.
 * @param {import('@vpmedia/phaser').Game} game - TBD.
 * @param {string} key - TBD.
 * @param {object} fontData - TBD.
 * @param {HTMLCanvasElement} textureSource - TBD.
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
