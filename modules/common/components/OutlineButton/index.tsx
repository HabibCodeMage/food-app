import React, { FC, ReactNode } from "react";
import styles from "./styles.module.css";

interface OutlineButtonProps {
  children: ReactNode;
  sx?: string;
  borderColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const OutlineButton: FC<OutlineButtonProps> = ({
  children,
  sx,
  width,
  height,
  borderColor,
  borderRadius,
  disabled = false,
  ...props
}) => {
  const style: React.CSSProperties = {
    width: width || "",
    height: height || "",
    borderColor: borderColor || "",
    borderRadius: borderRadius || "",
  };

  return (
    <button
      className={`${styles.root} ${sx}`}
      style={style}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
