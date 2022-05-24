import React, { type HTMLAttributes, type ReactElement } from 'react';

const longArray = [
  'hello world',
  'hello world',
  'hello world',
  'hello world',
  'hello world',
  'hello world',
  'hello world',
  'hello world',
  'hello world',
  'hello world',
];

longArray.push('hello world');

export const TestComponent = (props: HTMLAttributes<HTMLDivElement>): ReactElement<HTMLDivElement> => {
  return <div {...props}>Hello world</div>;
};

export const Sample = (): ReturnType<typeof TestComponent> => {
  function onClick(): void {
    return void 0;
  }

  return <TestComponent id="test_id" onClick={onClick} />;
};

function arrays(arg: readonly unknown[]) {
  return arg;
}

arrays([]);

['arr'].reduce<Record<string, string>>((acc, curr, index) => {
  acc[curr] = index.toString();
  return acc;
}, {});
