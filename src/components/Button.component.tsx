import React from "react";

type SwitchProps = {
  handleClick: (event:React.MouseEvent<HTMLButtonElement>,id : number) => void,
};

const ButtonComponent = (props: SwitchProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event,1)}>Click</button>
    </div>
  );
};

export default ButtonComponent;
