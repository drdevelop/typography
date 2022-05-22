import format from '../utils';

describe("\n[suffix ellipsis]: verify text calculating\n", () => {
  it("<testcase>: pure english with suffix", () => {
    const suffix = 'viewmore';
    const formatedText = format(
      'I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box',
      suffix,
    );
    const expectFormatedText = 'I may be the first row of data displayed in this text box hey, I may be the second ...' + suffix;
    expect(formatedText).toBe(expectFormatedText);
  });
})
