import * as fs from 'fs/promises';
import * as path from 'path';

export const readPackageJson = async () => {
  const packageBuffer = await fs.readFile(path.resolve('package.json'));
  const packageString = packageBuffer.toString();
  const configuration = JSON.parse(packageString) as Record<
    'name' | 'description' | 'version',
    string
  >;

  return configuration;
};
