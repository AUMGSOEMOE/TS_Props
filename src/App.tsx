
import ContainerComponent from "./components/Container.component"

import UserComponent from "./components/context/User.component"
import UserContextProvider from "./components/context/UserContext.component"




function App() {

  

  return (
    <>
      <ContainerComponent styles={{color: "gray"}} >
        <UserContextProvider>
          <UserComponent />
        </UserContextProvider>
      </ContainerComponent>
      
    </>
  )
}

export default App
