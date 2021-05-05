import type { en } from './types/locale_en';
import type { es } from './types/locale_es';

export type Resources = typeof en & typeof es;
export type ResourcesKey<T = keyof Resources> = [T] extends [never] ? string : T;
