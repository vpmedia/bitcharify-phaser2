export const TYPE_CHECKING = true;

/**
 * @typedef {object} FontData
 * @property {{face: string | string[], size: number}[]} info - The font metadata information.
 * @property {{lineHeight: number}[]} common - The common font properties.
 * @property {{id: number, file: string}[]} page - The font page information.
 * @property {{id: number, page: number, x: number, y: number, width: number, height: number, xoffset: number, yoffset: number, xadvance: number}[]} char - The character data for each glyph.
 * @property {{first: number, second: number, amount: number}[]} kerning - The kerning pairs for character spacing.
 * @property {number[]} distanceField - The distance field data for the font.
 * @property {number} [xSpacing] - Font X spacing.
 * @property {number} [ySpacing] - Font Y spacing.
 */
