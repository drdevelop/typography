import format from '../utils';

describe("\n[normal ellipsis]: verify text calculating\n", () => {
  it("<testcase>: pure english test", () => {
    const formatedText = format(
      'I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box',
    );
    const expectFormatedText = 'I may be the first row of data displayed in this text box hey, I may be the second row of dat...';
    expect(formatedText).toBe(expectFormatedText);
  });
})
