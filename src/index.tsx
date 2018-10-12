import * as React from "react";

import styles from "./styles.css";

export interface IRowProps {
  className?: string;
  columns: number;
}

export interface IColumnProps {
  className?: string;
  sm?: number;
  md?: number;
  lg?: number;
}

export const Row: React.SFC<IRowProps> = ({ columns, children, className }) => {
  const classNames = [styles[`oGrid${columns}Columns`]];
  if (className) {
    classNames.push(className);
  }

  return <div className={classNames.join(" ")}>{children}</div>;
};

export const Column: React.SFC<IColumnProps> = ({
  sm,
  md,
  lg,
  children,
  className
}) => {
  const classNames = [];
  if (className) {
    classNames.push(className);
  }
  if (sm) {
    classNames.push(styles[`oSpan${sm}`]);
  }
  if (md) {
    classNames.push(styles[`oSpan${md}Med`]);
  }
  if (lg) {
    classNames.push(styles[`oSpan${lg}Lg`]);
  }
  return <div className={classNames.join(" ")}>{children}</div>;
};
