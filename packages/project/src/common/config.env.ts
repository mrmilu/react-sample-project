/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

// IMPORTANT: Add environment variables in env/.env.development file or add process.env variables in snowpack.config.js

export class ConfigEnv {
  static IS_DEV = import.meta.env.VITE_API_URL === 'development';
  static NODE_ENV: string = import.meta.env.VITE_NODE_ENV || 'development';
  static API_URL: string = import.meta.env.VITE_API_URL || '';
  static SENTRY_URL: string = import.meta.env.VITE_SENTRY_URL || '';
  static PACKAGE_NAME: string = import.meta.env.VITE_PACKAGE_NAME || 'unknown-package';
  static PACKAGE_VERSION: string = import.meta.env.VITE_PACKAGE_VERSION || '0.0.0-development';
}
