import React from "react";

type ValueType ={
  value:number,
}

type isPositiveType = ValueType & {
  isPositive? : true
  isNegative? : never
  isZero? : never
}

type isNegativeType = ValueType & {
  isPositive? : never
  isNegative? : true
  isZero? : never
}

type isZeroType = ValueType & {
  isPositive? : never
  isNegative? : never
  isZero? : true
}

type HolaProps = isPositiveType | isNegativeType | isZeroType
    
   


const HolaComponent = (props: HolaProps) => {
  return <div>{props.value} is {props.isPositive && "positive"} {props.isNegative && "negative"}
   {props.isZero && "Zero"}</div>;
};

export default HolaComponent;
