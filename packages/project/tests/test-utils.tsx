/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store from '../src/common/view/store/store';

/**
 * Custom render to add possible store
 * @param {React.ReactElement} ui
 * @param {RenderOptions} renderOptions
 * @returns {RenderResult}
 */
export function customRender(ui: React.ReactElement | React.ReactNode, renderOptions?: RenderOptions) {
  const Wrapper = ({ children }: PropsWithChildren<unknown>) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(ui as React.ReactElement, { ...renderOptions, wrapper: Wrapper });
}

/**
 * Identify mocked object
 * @param {Record<string, unknown>} obj
 * @returns {string | "undefined" | "object" | "boolean" | "number" | "string" | "function" | "symbol" | "bigint"}
 */
function parseMockObject(obj: Record<string, unknown>) {
  if ('$$typeof' in obj && typeof obj.$$typeof === 'symbol') {
    // React element
    return '[React Element]';
  } else if (typeof obj === 'function') {
    return '[Function]';
  }
  return JSON.stringify(obj);
}

/**
 * Mock a component
 * @param originalComponent
 * @returns {() => React.FunctionComponent<{}>}
 */
export function mockComponent(originalComponent: string) {
  // @ts-ignore
  return ({ children, ...props }) => {
    const parsedProps = Object.entries(props || {})
      .map(([key, value]) => {
        let v: unknown;
        switch (typeof value) {
          case 'function':
          case 'object':
            v = parseMockObject(value);
            break;
          case 'boolean':
            v = value.toString();
            break;
          case 'string':
            v = value;
            break;
          default:
            v = JSON.stringify(value);
        }
        if (v === undefined) {
          v = '';
        }
        return [key, v];
      })
      // @ts-ignore
      .reduce((a, [key, value]) => ({ ...a, [key]: value }), {});
    return (
      <div {...parsedProps} data-mocked-component={originalComponent}>
        {typeof children === 'function' ? '[Child as a function]' : children}
      </div>
    );
  };
}

// re-export everything
export * from '@testing-library/react';
