import React from "react";
import styles from "./styles.module.css";

interface SkeletonProps {
  type?: "text" | "avatar";
  width?: string;
  height?: string;
  borderRadius?: string;
  sx?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  type = "text",
  width,
  height,
  borderRadius,
  sx,
}) => {
  const skeletonClass = `${styles.skeleton} ${styles[type]}`;

  const style: React.CSSProperties = {
    width: width || "",
    height: height || "",
    borderRadius: borderRadius || "",
  };

  return <div className={`${skeletonClass} ${sx}`} style={style}></div>;
};

export default Skeleton;
