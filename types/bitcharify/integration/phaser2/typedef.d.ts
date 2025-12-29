export const TYPE_CHECKING: true;
export type FontData = {
    /**
     * - The font metadata information.
     */
    info: {
        face: string | string[];
        size: number;
    }[];
    /**
     * - The common font properties.
     */
    common: {
        lineHeight: number;
    }[];
    /**
     * - The font page information.
     */
    page: {
        id: number;
        file: string;
    }[];
    /**
     * - The character data for each glyph.
     */
    char: {
        id: number;
        page: number;
        x: number;
        y: number;
        width: number;
        height: number;
        xoffset: number;
        yoffset: number;
        xadvance: number;
    }[];
    /**
     * - The kerning pairs for character spacing.
     */
    kerning: {
        first: number;
        second: number;
        amount: number;
    }[];
    /**
     * - The distance field data for the font.
     */
    distanceField: number[];
    /**
     * - Font X spacing.
     */
    xSpacing?: number;
    /**
     * - Font Y spacing.
     */
    ySpacing?: number;
};
//# sourceMappingURL=typedef.d.ts.map