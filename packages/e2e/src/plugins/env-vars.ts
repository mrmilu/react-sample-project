/* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-assignment */

import * as fs from 'fs';
import * as path from 'path';

const envBase = path.resolve(__dirname, '../../../project');
const envCypress = path.resolve(__dirname, '../../env');

const environmentsConfig = {
  local: [path.join(envBase, '.env.local'), path.join(envCypress, '.env.local')],
  dev: [path.join(envBase, '.env.development'), path.join(envCypress, '.env.development')],
  prod: [path.join(envBase, 'production.env'), path.join(envCypress, 'production.env')]
};

export function getEnvVars(env?: string) {
  if (!env) {
    return {};
  }
  let extractedVars: Record<string, string> = {};
  environmentsConfig[env as keyof typeof environmentsConfig].forEach((file) => {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    if (fs.existsSync(file)) {
      const vars = require('dotenv').config({ path: file });
      extractedVars = { ...extractedVars, ...vars.parsed };
    }
  });
  return parseValues(extractedVars);
}

function parseValue(value: string): string | number | boolean {
  if (['true', 'false'].includes(value.toLowerCase())) {
    return value.toLowerCase() === 'true';
  }
  if (+value) {
    return +value;
  }
  return value;
}

function parseValues(values: Record<string, string>): Record<string, ReturnType<typeof parseValue> | ReturnType<typeof parseValue>[]> {
  const result: ReturnType<typeof parseValues> = {};
  Object.entries(values).forEach(([key, value]) => {
    if (Array.isArray(value) || value.includes(',')) {
      const arr: string[] = Array.isArray(value) ? value : value.split(',');
      result[key.toString()] = arr.map(parseValue);
    } else {
      result[key.toString()] = parseValue(value);
    }
  });

  return result;
}
