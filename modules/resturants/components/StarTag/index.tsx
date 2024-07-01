import Tag from "@/modules/common/components/tag";
import { StarIcon } from "@/modules/common/icons";
import styles from "./styles.module.css";
import { FC } from "react";

interface StartTagProps {
  count: number;
}

const StartTag: FC<StartTagProps> = ({ count }) => {
  return (
    <Tag sx={styles.root}>
      <StarIcon />
      <p>{count.toFixed(1)}</p>
    </Tag>
  );
};

export default StartTag;
