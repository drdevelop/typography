import { isPunctuation, findLastIndex, calcWidth } from './textAlgorithm';

interface Style {
  length: number;
  lines: number;
  fontSize: number;
  ellipsisWidth?: number;
  fontFamily: string;
}

function calcIndexOfWillEllipsis(str: string, style: Style, recognizeLineBreaks: boolean) {
  const { fontSize, lines, length, ellipsisWidth, fontFamily } = style;
  const lineWidth = length / lines;
  let computedStr = '';
  let restStr = str;
  let totalWidth = 0;
  // current calc index of char
  let i = -1;
  const dp: { [key: string]: number } = {};
  let containerTotalWidth = lineWidth * lines;
  let prevLineRestWidth = 0;
  let endIsBreakLine = false;
  while (restStr !== '') {
    const workInProgressLineWidth = totalWidth % lineWidth;
    const workInProgressIsPunctuation = isPunctuation(restStr[0]);

    // next if is continuous english char
    // must be not use [A-z]+ to match upper and lower case chars, it will include the \n char
    const nextContinuousEnChar = restStr.match(/^[a-zA-Z]+/)?.[0];
    // next if is continuous number char
    // todo: punctuation and number as a whole?
    const nextContinuousNumChar = restStr.match(/^-?[0-9]+/)?.[0];
    const nextBreakLineChar = restStr.match(/^\\n/)?.[0];
    // The jumping mechanism
    const workInProgressStr = nextBreakLineChar || nextContinuousEnChar || nextContinuousNumChar || restStr[0];
    computedStr += workInProgressStr;
    i += workInProgressStr.length;
    const charCodeWidth = calcWidth(workInProgressStr, fontSize, fontFamily);
    /**
     * Dynamic programming will store the calculated width into DP
     * More than half of the chars are stored, reducing the space complexity by 2 times
     */
    if (workInProgressLineWidth > lineWidth / 2) {
      dp[workInProgressStr] = charCodeWidth;
    }
    console.log('work in progress str', workInProgressStr, totalWidth, charCodeWidth);
    /**
     * special jump
     * if meet break line, immediate jump
     */
    if (recognizeLineBreaks && nextBreakLineChar) {
      prevLineRestWidth = lineWidth - workInProgressLineWidth;
      // The free space is calculated within the total width and the line is wrapped directly
      totalWidth += prevLineRestWidth;
      if (totalWidth === containerTotalWidth) {
        endIsBreakLine = true;
      }
      restStr = restStr.replace(/^\\n/, '');
      continue;
    }
    /**
     * normal jump
     */
    if (workInProgressLineWidth + charCodeWidth > lineWidth) {
      prevLineRestWidth = lineWidth - workInProgressLineWidth;
      // The free space is calculated within the total width and the line is wrapped directly
      totalWidth = totalWidth + prevLineRestWidth + charCodeWidth;
    } else {
      totalWidth += charCodeWidth;
    }
    
    const isFirstCharOfNextLine = workInProgressLineWidth + charCodeWidth > lineWidth;
    // compensation mechanism
    // A string of English or numbers enclosed in double quotation marks needs to be wrapped together
    const prevIsDoubleQuote = computedStr.slice(i - workInProgressStr.length, i - workInProgressStr.length + 1) === `“` ||
      computedStr.slice(i - workInProgressStr.length, i - workInProgressStr.length + 1) === `"`;
    if (
      isFirstCharOfNextLine &&
      (workInProgressIsPunctuation || (prevIsDoubleQuote && nextContinuousNumChar)) &&
      totalWidth >= lineWidth &&
      !/\\n$/.test(computedStr)
    ) {
      let backTrackingStr = computedStr;
      // line beginning is punctuation after first line
      // if that after break line char, punctuation of line beginning can normal layout, as first line
      /**
       * due to char of current punctuation has been calced end of computed str
       * so the last char is punctuation on computed str，look for compensation directly form the penultimate char
       */
      let backTrackingIndex = computedStr.length - 1 - workInProgressStr.length;
      backTrackingStr = backTrackingStr.slice(0, -workInProgressStr.length);
      console.log('will compensate char', computedStr[backTrackingIndex]);
      // find non punctuation
      // backtracking compensate
      while (true) {
        console.log('compensating char');
        if (backTrackingIndex <= 0) {
          // Disaster recovery
          // if there are all punctuation before current punctuation, then needn't compensate, normal layout
          backTrackingIndex = backTrackingStr.length - 1;
          break;
        }
        if (isPunctuation(backTrackingStr[backTrackingIndex])) {
          backTrackingIndex--;
          continue;
        }
        // non punctuation, if it is english words or continuous number,
        // the whole english words or continuous number need compensate
        const enOrNumWords = backTrackingStr.match(/[a-zA-z]+$/)?.[0] || backTrackingStr.match(/-?[0-9]+$/)?.[0];
        if (enOrNumWords?.length > 0) {
          // due to current readIndex has been reduced by one actually,
          // so calc the words length need reduce one
          backTrackingIndex -= enOrNumWords.length - 1;
          break;
        } else {
          break;
        }
      }
      // the fall chars of prev line, need compensate calc width
      // for example, when the first char is ",", prev line chars is "i am prev line,", 
      // the typesetter will look for non punctuated characters
      // and drop the following characters to the beginning of the next line
      // That is, the words "line"
      const fallChars = backTrackingStr.slice(backTrackingIndex);
      // Dynamic programming, there is no need to double calculate the path
      const fallCharsWidth = dp[fallChars] || calcWidth(fallChars, fontSize, fontFamily);
      totalWidth += fallCharsWidth;
      console.log('char of compensate is: ', fallChars);
    }

    restStr = restStr.slice(workInProgressStr.length);
    // The backtracking return mechanism
    if (totalWidth >= containerTotalWidth) {
      /**
       * Special return ———— it's clever here (difficult to understand)
       * Achieve effect"the next is break line char \n haha" show as "the next is break line char..."
       * Because the break line char, at this time, if the newline character is still retained,
       * the imposed ellipsis is displayed to fill in zero, and the ellipsis will also be displayed on the next line
       * So we merge the break line char of the last line and ellipsis as a ellipsis, 
       * in this way, the additional ommitted space "view more" can also be displayed inline on the same line
       */
      const prevBreakLinePlace = findLastIndex(computedStr, '\\n');
      if (endIsBreakLine && prevBreakLinePlace >= 0) {
        i = prevBreakLinePlace - 1;
        totalWidth = containerTotalWidth;
      }
      /**
       * normal return
       */
      // reserved ellipsis area location
      containerTotalWidth -= ellipsisWidth;
      // very important (leave blank at the end of line to eliminate supply to ellipsis occupation)
      // because the previous line actually left a part blank,
      // this part should not be included in the total width of the actual text during the deletion process
      totalWidth -= prevLineRestWidth;
      console.log('target width', containerTotalWidth, prevBreakLinePlace, computedStr.slice(prevBreakLinePlace));
      while (totalWidth > containerTotalWidth) {
        // Dynamic programming, there is no need to double calculate the path
        const backTrackingWidth = dp[computedStr[i]] || calcWidth(computedStr[i], fontSize, fontFamily);
        totalWidth -= backTrackingWidth;
        i--;
      }
      break;
    }
  }
  return i;
}

export interface Config {
  /**
   * if recognize line break char
   * @default false
   */
  recognizeLineBreaks?: boolean;
}

export default function formatWithEllipsis(str: string, style: Style, config: Config = {}) {
  /**
   * todo: continuous space should merge as one space, 
   * due to the html5 rendering mechanism, multiple consecutive spaces are rendered as one
   */
  const { recognizeLineBreaks } = config;
  const { fontSize, ellipsisWidth = 0 } = style;
  // clac ellipsis area width,
  // for example, The user adds an ellipsis to omit more, and then adds an ellipsis,
  // at this time, the width of chinese character needs to be the width of its own ellipsis
  const realEllipsisWidth = ellipsisWidth + fontSize;
  const computedIndex = calcIndexOfWillEllipsis(
    str,
    {
      ...style,
      ellipsisWidth: realEllipsisWidth,
    },
    recognizeLineBreaks,
  );

  let formatStr = str.slice(0, computedIndex + 1);
  if (formatStr !== str) {
    formatStr += '...';
  }
  return formatStr;
}
