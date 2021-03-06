import assert from 'assert';
import config from './config';

describe('config', () => {
  it('.getPackageJsonConfigValue returns value for valid key', () => {
    const actual = config.getPackageJsonConfigValue('default_port');
    expect(actual).toBeDefined();
  });

  it('.getPackageJsonConfigValue throws error for invalid key', () => {
    try {
      config.getPackageJsonConfigValue('bad key');
    } catch (error) {
      expect(error).toContain(
        '"bad key" not found in package.json config values: {'
      );
      return;
    }

    assert.fail(null, null, 'Expected error was not thrown.');
  });

  it('.getHost returns default_host from package.json config', () => {
    const actual = config.getHost();
    expect(actual).toBeDefined();
    expect(actual).toBe(config.getPackageJsonConfigValue('default_host'));
  });

  it('.getPort returns default_port from package.json config', () => {
    const actual = config.getPort();
    expect(actual).toBeDefined();
    expect(actual).toBe(config.getPackageJsonConfigValue('default_port'));
  });
});
