import React, { HTMLAttributes, ReactElement } from "react";

export const TestComponent = (props: HTMLAttributes<HTMLDivElement>): ReactElement<HTMLDivElement> => {
  return <div {...props}>Hello world</div>;
};

export const Sample = (): ReturnType<typeof Sample> => {
  function onClick(): void {
    return void 0;
  }

  return <TestComponent id="test_id" onClick={onClick} />;
};
