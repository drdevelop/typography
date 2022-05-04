/**
 * markdown and link parser
 */
import React from 'react';
import LinkParse from './link-parser';
import MdParse from './md-parser';
import { interfaceFormat } from '../formater/type-format';

function parse(text: string) {
  if (!text) return;
  const parsedSet = LinkParse(interfaceFormat(text));
  if (typeof parsedSet === 'string') {
    return MdParse(text);
  }
  return (
    <>
      {parsedSet.map(strOrComp => {
        if (typeof strOrComp === 'function') {
          return MdParse(strOrComp);
        }
        return strOrComp;
      })}
    </>
  )
}

export default parse;
