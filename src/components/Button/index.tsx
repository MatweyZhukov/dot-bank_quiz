import type { ButtonHTMLAttributes, FC } from 'react';
import './Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  width?: number | string;
  borderRadius?: number | string;
  height?: number | string;
};

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  width,
  height,
  borderRadius,
  style,
  ...props
}) => {
  return (
    <button
      className={`app-button ${variant}`}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
