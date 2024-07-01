import Tag from "@/modules/common/components/tag";
import { StarIcon } from "@/modules/common/icons";
import styles from "./styles.module.css";
import { FC } from "react";

interface TimeTagProps {
  minCookTime: number;
  maxCookTime: number;
}

const TimeTag: FC<TimeTagProps> = ({ minCookTime, maxCookTime }) => {
  return (
    <Tag sx={styles.root}>
      <p>
        {minCookTime}-{maxCookTime}
      </p>
    </Tag>
  );
};

export default TimeTag;
