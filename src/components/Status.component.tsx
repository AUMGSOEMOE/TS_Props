import React from "react";

type statusProps = {
  status : 'loading' | 'success' | 'error'
}

const StatusComponent = (props:statusProps) => {
  let message
  if(props.status==='loading'){
     message = "Loading"
  }else if(props.status==='success'){
     message = "Data successfully"
  }else if(props.status==='error'){
     message = "Not found ,something wrong"
  }
  return <div>  
    <h2>{message}</h2>
   
  </div>;
};

export default StatusComponent;
