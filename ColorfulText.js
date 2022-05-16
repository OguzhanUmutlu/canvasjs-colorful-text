function ColoredText(string, color) {
    this.string = string;
    this.color = color
}

/**
 * @param {string} string
 * @param {string} color
 * @return {ColoredText}
 */
ColoredText.create = (string, color) => new ColoredText(string, color);
/**
 * @param {string} string
 * @param {string} color
 * @return {ColoredText[]}
 */
ColoredText.createString = (string, color) => string.split("").map(i => ColoredText.create(i, color));


/**
 * @param {number} x
 * @param {number} y
 * @param {ColoredText[]} texts
 */
function drawColoredTexts(x, y, texts) {
    for (let i = 0; i < texts.length; i++) {
        ctx.fillStyle = texts[i].color;
        const widths = texts.slice(0, i).map(i => ctx.measureText(i.string).width);
        ctx.fillText(texts[i].string, x + (widths.length > 0 ? widths.reduce((a, b) => a + b) : 0), y);
    }
}

drawColoredTexts(10, 10, [ColoredText.create("hello", "red"), ColoredText.create("world", "blue")]);
