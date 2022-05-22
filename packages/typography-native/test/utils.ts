import formatWithEllipsis from '../src';
import { calcWidth } from '../src/algorithm/textAlgorithm';

export default function format(str: string, suffix?: string) {
  const fontSize = 14;
  const fontFamily = '-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol';
  let ellipsisWidth = 0;
  if (suffix) {
    ellipsisWidth = calcWidth(suffix, fontSize, fontFamily);
  }
  const width = 300;
  const rows = 2;
  let formatedText = formatWithEllipsis(
    str,
    {
      length: width * rows,
      lines: rows,
      fontSize,
      fontFamily,
      ellipsisWidth,
    }, {
      recognizeLineBreaks: true,
    }
  );
  if (suffix) {
    formatedText += suffix;
  }
  return formatedText;
}
