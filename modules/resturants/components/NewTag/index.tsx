import Tag from "@/modules/common/components/tag";
import styles from "./styles.module.css";
import { FC } from "react";

const NewTag: FC = () => {
  return (
    <Tag sx={styles.root}>
      <p className={styles.text}>New</p>
    </Tag>
  );
};

export default NewTag;
