let ctx: CanvasRenderingContext2D;
let supportCanvas = false;
const DEFAULT_FAMILY = `"PingFangSC", "Helvetica Neue", Helvetica, "Hiragino Sans GB", sans-serif`;

export function isPunctuation(str: string) {
  return /^\p{Sc}+|^\p{P}+/u.test(str);
}

function isSupportCanvas(canvasElement: HTMLCanvasElement) {
  if (supportCanvas) return true;
  // judge canvas if include getContext function, 
  // if not have, this means that browser not support canvas
  if (!canvasElement.getContext) {
    return false;
  }
  supportCanvas = true;
  return true;
}

function probeCompatibility() {
  if (ctx) return;
  const canvas = document.createElement('canvas');
  if (isSupportCanvas(canvas)) {
    ctx = canvas.getContext('2d');
  }
}

// The english punctuation width is half of chinese char
const punctuationEqEn = [
  12289, // 、
  65307, // ; semicolon
  12300, // quote
  12301, // quote
  12302, // quote
  8216, // quote
  8217, // quote
  8220, // quote
  8221, // quote
  65288, // brackets
  65289, // brackets
  12308, // brackets
  12309, // brackets
  12304, // brackets
  12305, // brackets
  8211, // hyphen
  65294, // separation dot
];

// The Chinese punctuation width is one chinese char
const punctuationEqCn = [
  12290, // 。period
  65311, // ？question mark
  65281, // ！exclamation mark
  65292, // ，comma
  65306, // colon
  12298, // 《 book name mark
  12299, // 》 book name mark
];

function isChinesePunctuationEqEn(charCode: number) {
  return  punctuationEqEn.includes(charCode);
}

function getCharCodeWidth(charCode: number, fontSize: number) {
  if (
    (charCode >= 0 && charCode <= 255) ||
    isChinesePunctuationEqEn(charCode)
  ) {
    // not chinese
    return fontSize / 2;
  }
  return fontSize;
}

/**
 * calc string width
 * @param str string
 * @param fontSize chinese font size
 * @param fontFamily parent container font-family
 * @returns 
 */
export function calcWidth(str: string, fontSize: number, fontFamily: string): number {
  probeCompatibility();
  if (supportCanvas) {
    fontFamily = fontFamily || DEFAULT_FAMILY;
    ctx.font = `${fontSize}px ${fontFamily}`;
    return +ctx.measureText(str).width.toFixed(1);
  }
  let width = 0;
  let lastCode: string;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (lastCode === ' ' && str[i] === ' ') {
      // continuous space only be calc one space width
      continue;
    }
    if (charCode === 10) {
      // break line char or space doesn't calc width
      continue;
    }
    width += getCharCodeWidth(charCode, fontSize);
    lastCode = str[i];
  }
  return width;
}

// find the last position of the current word in the string 
export function findLastIndex(str: string, word: string) {
  let matchIndex = -1;
  let readIndex = 0;
  let restStr = str;
  while (readIndex < str.length) {
    let i = restStr.indexOf(word);
    if (i >= 0) {
      if (matchIndex === -1) {
        matchIndex = 0;
      }
      // if matched, update match index
      matchIndex = matchIndex + i + word.length;
      restStr = restStr.slice(i + word.length);
    } else {
      // if not match, it means that last one was matched before, then exit condition
      readIndex = str.length;
    }
  }
  if (matchIndex !== -1) {
    matchIndex -= word.length;
  }
  return matchIndex;
}
