import React, { useState } from 'react';
import { customRender, fireEvent, mockComponent } from '../../../../../../tests/test-utils';
import Input from '../input.component';

jest.mock('../../title/title.component', () => mockComponent('Title'));

function TestInput() {
  const [value, setValue] = useState('');

  return (
    <Input
      label="Test"
      onChange={(e) => {
        setValue(e.target.value);
      }}
      name="test"
      value={value}
    />
  );
}

const setup = () => {
  const rendered = customRender(<TestInput />);
  const input = rendered.getByLabelText('Test') as HTMLInputElement;
  return {
    input,
    rendered
  };
};

describe('Input', () => {
  it('Render', () => {
    const { rendered } = setup();
    // Generate a master snapshot or check if already exists a master
    expect(rendered.container).toMatchSnapshot();
  });

  it('Should trigger on change', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'This is a test' } });
    expect(input.value).toBe('This is a test');
  });
});
