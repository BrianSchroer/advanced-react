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

  describe('.dateTime', () => {
    it('should format good date correctly', () => {
      expect(
        format.dateTime('Mon Jul 11 2016 11:22:33 GMT+0000 (UTC)')
      ).toEqual('Mon Jul 11 2016 06:22:33');
    });

    [undefined, '', ' ', 'bad date'].forEach(badDate => {
      it(`should format bad date "${badDate}" as "Invalid Date"`, () => {
        expect(format.date(badDate)).toEqual('Invalid Date');
      });
    });
  });
});
