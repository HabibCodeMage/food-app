import React, { FC, ReactNode } from "react";
import styles from "./styles.module.css";

interface CardProps {
  children: ReactNode;
  rootSx?: string;
}

const Card: FC<CardProps> = ({ children, rootSx = "" }) => {
  return <div className={`${rootSx} ${styles.card} `}>{children}</div>;
};

export default Card;
