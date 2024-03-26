
import GreetComponent from "./components/Greet.component"
import HeadingComponent from "./components/Heading.component"
import OscarComponent from "./components/Oscar.component"
import StatusComponent from "./components/Status.component"


function App() {

 

  return (
    <>
      <StatusComponent status="success" />
      <HeadingComponent>HeadingComponent</HeadingComponent>
      <OscarComponent>
        <HeadingComponent>Oscar goes to Johnny Depp</HeadingComponent>
      </OscarComponent>
      <GreetComponent name="Agoe" amount={10}  right={true}  />
    </>
  )
}

export default App
