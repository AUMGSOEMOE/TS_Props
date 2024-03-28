
import ContainerComponent from "./components/Container.component"
import Counter from "./components/state/Counter.component"
import LoggedInComponent from "./components/state/LoggedIn.component"
import UserComponent from "./components/state/User.component"



function App() {

  

  return (
    <>
      <ContainerComponent styles={{color: "gray"}} >
        <LoggedInComponent />
        <UserComponent name="AGOE" email="agoe@gmail.com" />
        <Counter />
      </ContainerComponent>
      
    </>
  )
}

export default App
