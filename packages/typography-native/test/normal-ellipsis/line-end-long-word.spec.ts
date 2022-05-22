import format from '../utils';

describe("\n[normal ellipsis]: verify text calculating\n", () => {
  it("<testcase>: line end long word", () => {
    const formatedText = format(
      '我可能是展示在这个文本框中的第一行namespace，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据',
    );
    const expectFormatedText = '我可能是展示在这个文本框中的第一行namespace，我可能是展示在这个文本框中的...';
    expect(formatedText).toBe(expectFormatedText);
  });
})
