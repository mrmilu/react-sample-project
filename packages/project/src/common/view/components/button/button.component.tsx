import React, { PropsWithChildren, useCallback } from 'react';
import Title from '../title/title.component';

export type ButtonProps = Required<PropsWithChildren<unknown>> & {
  /**
   * Indicates if button is disabled
   */
  disabled?: boolean;
  /**
   * Click event
   */
  onClick?: () => void;
};

function Button({ children, disabled, onClick }: ButtonProps) {
  const clickHandler = useCallback(() => {
    if (!disabled && onClick) {
      onClick();
    }
  }, [disabled, onClick]);

  return (
    <button onClick={clickHandler}>
      <Title>This is a button</Title>
      {children}
    </button>
  );
}

export default React.memo(Button);
