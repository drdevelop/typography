import React from 'react';
import { AnchorLink } from 'dumi/theme';

type SandsWithParsed = Array<string | React.ReactElement>;

function filter(text?: string) {
  let rest = text;
  const sandBox: SandsWithParsed = [];
  while (rest.length > 0) {
    const group = rest.match(/\[([\d\D]+?)\]\(([\d\D]+?)\)/);
    const linkText = group?.[1];
    if (!linkText) {
      sandBox.push(rest);
      rest = '';
      break;
    }
    const before = rest.slice(0, group.index);
    rest = rest.slice(group.index + group[0].length);
    const url = group[2];
    if (/^https?:\/\//.test(url)) {
      sandBox.push(before, <a href={url} target="_blank">{linkText}</a>);
    } else {
      sandBox.push(before, <AnchorLink to={url}>{linkText}</AnchorLink>)
    }
  }
  return sandBox;
}

function parse(text?: string): SandsWithParsed {
  if (!text) return [text];
  return filter(text);
}

export default parse;
