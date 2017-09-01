import format from './format';

describe('format', () => {
  describe('.date', () => {
    it('should format good date correctly', () => {
      expect(format.date('Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)')).toEqual(
        'Sun Jul 10 2016'
      );
    });

    [undefined, '', ' ', 'bad date'].forEach(badDate => {
      it(`should format bad date "${badDate}" as "Invalid Date"`, () => {
        expect(format.date(badDate)).toEqual('Invalid Date');
      });
    });
  });
});
