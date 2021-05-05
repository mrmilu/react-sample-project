import fs from 'fs';
import path from 'path';
import { locales } from '../src/i18n/locale';

type PlainObjectExtraProps = {
  target?: Record<string, unknown>;
  prefix?: string;
  separator?: string;
  useTypes?: boolean;
};

/**
 * Transform Object to "plain mode" to have access to all key/subkeys in one level object
 * @param {T} obj
 * @param {Record<string, unknown> | undefined} target
 * @param {string | undefined} prefix
 * @param {string | undefined} separator
 * @param {boolean | undefined} useTypes
 * @returns {R}
 */
export function plainObject<T = Record<string, unknown>, R = Record<string, unknown>>(
  obj: T,
  { target = {}, prefix = '', separator = '.', useTypes = false }: PlainObjectExtraProps = {}
): R {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object') {
      return plainObject(value as Record<string, unknown>, {
        target,
        prefix: `${prefix + key}${separator}`,
        separator,
        useTypes
      });
    } else {
      return (target[prefix + key] = useTypes ? typeof value : value) as R;
    }
  });

  return target as R;
}

function getFileDest(key: string) {
  return path.resolve(__dirname, '../src/i18n/types', `locale_${key}.d.ts`);
}

/**
 * Transform JSON translate file to dot notation to have autocompletion for translate messages in IDE using typescript
 */
Object.entries(locales).forEach(([key, value]) => {
  const dotNot = plainObject(value, { useTypes: true });
  const result = `export declare const ${key}: ${JSON.stringify(dotNot, null, 2)};

export {};`;
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  fs.writeFileSync(getFileDest(key), result);
});
