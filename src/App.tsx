
import ContainerComponent from "./components/Container.component"

import UserComponent from "./components/context/User.component"
import UserContextProvider from "./components/context/UserContext.component"
import MutableComponent from "./components/ref/Mutable.component"




function App() {

  

  return (
    <>
      <ContainerComponent styles={{color: "gray"}} >
        <UserContextProvider>
          <UserComponent />
        </UserContextProvider>
        <MutableComponent />
      </ContainerComponent>
      
    </>
  )
}

export default App
