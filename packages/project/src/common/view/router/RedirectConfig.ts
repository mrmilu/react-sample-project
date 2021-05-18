export class RedirectConfig<S = null> implements IRedirectConfig<S> {
  pathname: string;
  search?: string;
  state?: S;

  constructor(config: IRedirectConfig<S>) {
    this.pathname = config.pathname;
    this.search = config.search;
    this.state = config.state;
  }
}

export interface IRedirectConfig<S> {
  pathname: string;
  search?: string;
  state?: S;
}
