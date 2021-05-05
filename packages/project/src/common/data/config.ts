import axios, { AxiosInstance } from 'axios';
import type { DmHeaders } from './types';
import { ConfigEnv } from '../config.env';

const EIGHT_SECONDS = 8_000;

export function parseUrl(url: string, params: Record<string, string | number>) {
  let finalUrl = url;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      finalUrl = finalUrl.replace(`{${key}}`, value.toString());
    });
  }
  return finalUrl;
}

class HttpClient {
  instance: AxiosInstance;

  constructor(auth = true) {
    const headers: DmHeaders = {};
    if (!auth && window.localStorage.getItem('token')) {
      const token = window.localStorage.getItem('token') || '';
      if (token) {
        headers['authorization'] = token;
      }
    }

    this.instance = axios.create({
      baseURL: ConfigEnv.API_URL,
      timeout: EIGHT_SECONDS,
      headers
    });
  }
}

export default new HttpClient();
