import React, { PropsWithChildren } from 'react';

export type TitleProps = Required<PropsWithChildren<unknown>> & {
  /**
   * Indicates if title should be in bold text
   */
  bold?: boolean;
};

function Title({ children, bold }: TitleProps) {
  return <h2 className={bold ? 'bold' : ''}>{children}</h2>;
}

export default React.memo(Title);
