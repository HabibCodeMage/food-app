import React, { ReactNode } from "react";
import styles from "./styles.module.css";

interface TagProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  sx?: string;
  children: ReactNode;
}

const Tag: React.FC<TagProps> = ({
  width,
  height,
  borderRadius,
  sx,
  children,
}) => {
  const style: React.CSSProperties = {
    width: width || "",
    height: height || "",
    borderRadius: borderRadius || "",
  };
  return (
    <div className={`${styles.root} ${sx}`} style={style}>
      {children}
    </div>
  );
};

export default Tag;
