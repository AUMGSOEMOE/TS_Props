
type PersonListProp = {
    names:{
        first:string,
        last:string
    }[]
}

const PersonListComponent = (props: PersonListProp) => {
    console.log(props);
  return (
    <div>{props.names.map((name) => {
        return  ( <h2 key={name.first}>
            {name.first} {name.last}
        </h2> )
    })}</div>
    
  )
}

export default PersonListComponent