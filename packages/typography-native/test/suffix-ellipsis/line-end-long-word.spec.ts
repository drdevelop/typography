import format from '../utils';

describe("\n[suffix ellipsis]: verify text calculating\n", () => {
  it("<testcase>: line end long word with suffix", () => {
    const suffix = '查看更多';
    const formatedText = format(
      '我可能是展示在这个文本框中的第一行namespace，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据',
      '查看更多'
    );
    const expectFormatedText = '我可能是展示在这个文本框中的第一行namespace，我可能是展示在这个文...' + suffix;
    expect(formatedText).toBe(expectFormatedText);
  });
})
