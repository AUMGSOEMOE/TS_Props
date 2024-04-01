
import PrivateComponent from "./components/auth/Private.component"
import profileComponent from "./components/auth/Profile.component"
import ContainerComponent from "./components/Container.component"
import HolaComponent from "./components/strict/Hola.component"







function App() {

  

  return (
    <>
      <ContainerComponent styles={{color: "gray"}} >
        <PrivateComponent isLoggedIn={true} Component={profileComponent} />
        <HolaComponent value={10} isNegative />
      </ContainerComponent>
      
    </>
  )
}

export default App
