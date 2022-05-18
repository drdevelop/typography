import React from 'react';
import ReactMarkdown from 'react-markdown';

function parse(text?: string) {
  if (!text) return;
  return (
    <ReactMarkdown
      renderers={{
        paragraph: 'span',
      }}
    >
      {text}
    </ReactMarkdown>
  )
}

export default parse;
