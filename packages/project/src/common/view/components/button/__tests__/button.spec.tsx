import React from 'react';
import { customRender, mockComponent } from '../../../../../../tests/test-utils';
import Button from '../button.component';

jest.mock('../../title/title.component', () => mockComponent('Title'));

describe('Button', () => {
  it('Render', () => {
    const rendered = customRender(<Button>Sample button</Button>);
    const text = rendered.getByText(/Sample button/);
    expect(text).not.toBeNil();
    // Generate a master snapshot or check if already exists a master
    expect(rendered.container).toMatchSnapshot();
  });
  it('Should on click', () => {
    const clickEvent = jest.fn();
    const rendered = customRender(<Button onClick={clickEvent}>the button</Button>);
    rendered.getByText(/the button/).click();
    // Check if event is called 1 time and without parameters
    expect(clickEvent).toHaveBeenCalledTimes(1).toHaveBeenCalledWith();
  });
  it('Should do not click on disabled', () => {
    const clickEvent = jest.fn();
    const rendered = customRender(
      <Button disabled onClick={clickEvent}>
        the button
      </Button>
    );
    rendered.getByText(/the button/).click();
    // Check if event is not called
    expect(clickEvent).toHaveBeenCalledTimes(0);
    // or
    expect(clickEvent).not.toHaveBeenCalled();
  });
});
