import * as React from "react";
import "./Container.css";

const Container = ({ className, children }) => {
  const classes = `container ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Container;
