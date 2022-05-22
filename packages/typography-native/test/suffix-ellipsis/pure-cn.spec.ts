import format from '../utils';

describe("\n[suffix ellipsis]: verify text calculating\n", () => {
  it("<testcase>: pure chinese with suffix", () => {
    const suffix = '查看更多';
    const formatedText = format(
      '我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据',
      suffix,
    );
    const expectFormatedText = '我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二...' + suffix;
    expect(formatedText).toBe(expectFormatedText);
  });
})
