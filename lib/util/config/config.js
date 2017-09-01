import fs from 'fs';
import path from 'path';

export default class {
  static getPackageJsonConfigValue(key) {
    const packageJsonPath = path.join(__dirname, '../../../package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const config = packageJson.config;

    if (!config.hasOwnProperty(key)) {
      throw `"${key}" not found in package.json config values: ${JSON.stringify(
        config
      )}`;
    }

    return config[key];
  }

  static getHost() {
    return process.env.HIST || this.getPackageJsonConfigValue('default_host');
  }

  static getPort() {
    return process.env.PORT || this.getPackageJsonConfigValue('default_port');
  }
}
