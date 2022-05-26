import React from 'react';
// http://localhost:8001
// import ReactMarkdown from 'react-markdown';

function parse(text?: string) {
  if (!text) return;
  return text;
  // return (
  //   <ReactMarkdown
  //     renderers={{
  //       paragraph: 'span',
  //     }}
  //   >
  //     {text}
  //   </ReactMarkdown>
  // )
}

export default parse;
