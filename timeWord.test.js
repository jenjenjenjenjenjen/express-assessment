const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test("works: noon", () => {
    const result = timeWord("12:00");
    expect(result).toBe("noon");
  });
  test("works: midnight", () => {
    const result = timeWord("00:00");
    expect(result).toBe("midnight");
  });
  test("works: am", () => {
    const result = timeWord("01:34");
    expect(result).toBe("one thirty four am");
  });
  test("works: pm", () => {
    const result = timeWord("13:34");
    expect(result).toBe("one thirty four pm");
  });
  test("works: o'clock", () => {
    const result = timeWord("09:00");
    expect(result).toBe("nine o'clock am");
  });
  test("works: oh", () => {
    const result = timeWord("03:09");
    expect(result).toBe("three oh nine am");
  });
});