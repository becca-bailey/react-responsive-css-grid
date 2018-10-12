import * as React from "react";

import "./styles.css";

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
  const classNames = [`o-grid-${columns}-columns`];
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
    classNames.push(`o-span-${sm}`);
  }
  if (md) {
    classNames.push(`o-span-${md}-med`);
  }
  if (lg) {
    classNames.push(`o-span-${lg}-lg`);
  }
  return <div className={classNames.join(" ")}>{children}</div>;
};
