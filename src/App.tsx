
import PrivateComponent from "./components/auth/Private.component"
import profileComponent from "./components/auth/Profile.component"
import ContainerComponent from "./components/Container.component"






function App() {

  

  return (
    <>
      <ContainerComponent styles={{color: "gray"}} >
        <PrivateComponent isLoggedIn={true} Component={profileComponent} />
      </ContainerComponent>
      
    </>
  )
}

export default App
