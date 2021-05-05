import React from 'react';
import { customRender } from '../../../../../../tests/test-utils';
import Title from '../title.component';

describe('Title', () => {
  it('Render', () => {
    const rendered = customRender(<Title>The title</Title>);
    const item = rendered.getByText('The title');
    expect(item).not.toBeNil();
    expect(rendered.container).toMatchSnapshot();
  });
  it('Should not contains bold className', () => {
    const rendered = customRender(<Title>The title</Title>);
    const result = rendered.container.querySelector('.bold');
    expect(result).toBeNil();
  });
  it('Should contains bold className', () => {
    const rendered = customRender(<Title bold>The title</Title>);
    const result = rendered.container.querySelector('.bold');
    expect(result).not.toBeNil().toBeObject();
    expect(rendered.container).toMatchSnapshot();
  });
});
