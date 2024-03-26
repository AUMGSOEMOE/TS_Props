
import GreetComponent from "./components/Greet.component"
import HeadingComponent from "./components/Heading.component"
import OscarComponent from "./components/Oscar.component"
import StatusComponent from "./components/Status.component"
import ButtonComponent from "./components/Button.component"
import InputComponent from "./components/Input.component"
import ContainerComponent from "./components/Container.component"



function App() {

  const handleClick = () => {
    console.log("button Clicked",event);
  }

  const handleChange = () => {
    console.log(event.data);
  }

  return (
    <>
      <ContainerComponent styles={{backgroundColor:"black", color:"white"}} >
        <StatusComponent status="success" />
        <HeadingComponent>HeadingComponent</HeadingComponent>
        <OscarComponent>
          <HeadingComponent>Oscar goes to Johnny Depp</HeadingComponent>
        </OscarComponent>
        <GreetComponent name="Agoe" amount={10}  right={true}  />
        <ButtonComponent handleClick={(event) => handleClick()} />
        <InputComponent value='' handleChange={(event)=>handleChange()} />
      </ContainerComponent>
      
    </>
  )
}

export default App
