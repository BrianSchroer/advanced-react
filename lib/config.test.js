import assert from 'assert';
import config from './config';

describe('config', () => {
  it('getPackageJsonConfigValue should return value for valid key', () => {
    const actual = config.getPackageJsonConfigValue('default_port');
    expect(actual).toBeDefined();
  });

  it('getPackageJsonConfigValue should throw error for invalid key', () => {
    try {
      config.getPackageJsonConfigValue('bad key');
    } catch (error) {
      expect(error).toContain('"bad key" not found in package.json config values: {');
      return;
    }

    assert.fail(null, null, 'Expected error was not thrown.');
  });

  it('getPort should return port from package.json config', () => {
    const actual = config.getPort();
    expect(actual).toBeDefined();
    expect(actual).toBe(config.getPackageJsonConfigValue('default_port'));
  });
});
