import React from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...rest }: ButtonProps): JSX.Element {
  return (
    <button {...rest}>
      {children}
    </button>
  );
}