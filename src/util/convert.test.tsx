import convert from './convert';

describe('convert()', () => {
  it('should convert as expected in alternating mode ignoring crud', () => {
    const mockSettings = {
      mode: 'alternating',
      ignoreCrud: true
    };
    const testCases = [
      {input: 'abc', output: 'AbC'},
      {input: 'abc def', output: 'AbC dEf'},
      {input: 'abc.def', output: 'AbC.dEf'},
      {input: 'abc.$ % ^ &  *def', output: 'AbC.$ % ^ &  *dEf'},
    ];
    testCases.forEach(t => {
      expect(convert(t.input, mockSettings)).toBe(t.output)
    })
  });
  it('should convert as expected in alternating mode not ignoring crud', () => {
    const mockSettings = {
      mode: 'alternating',
      ignoreCrud: false
    };
    const testCases = [
      {input: 'abc', output: 'AbC'},
      {input: 'abc def', output: 'AbC DeF'},
      {input: 'abc.def', output: 'AbC.DeF'},
      {input: 'abc.$ % ^  & *def', output: 'AbC.$ % ^  & *DeF'},
    ];
    testCases.forEach(t => {
      expect(convert(t.input, mockSettings)).toBe(t.output)
    })
  });
});