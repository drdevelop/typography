import format from '../utils';

describe("\n[normal ellipsis]: verify text calculating\n", () => {
  it("<testcase>: pure chinese test", () => {
    const formatedText = format(
      '我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据',
    );
    const expectFormatedText = '我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，...';
    expect(formatedText).toBe(expectFormatedText);
  });
})
