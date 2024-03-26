import React from "react";

type HeadingProps ={
  children : string
}

const HeadingComponent = (props:HeadingProps) => {
  return <div>{props.children}</div>;
};

export default HeadingComponent;
