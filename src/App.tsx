
import ContainerComponent from "./components/Container.component"
import BoxComponent from "./components/context/Box.component"
import ThemeContextProvider from "./components/context/Context.component"




function App() {

  

  return (
    <>
      <ContainerComponent styles={{color: "gray"}} >
        <ThemeContextProvider>
          <BoxComponent />
        </ThemeContextProvider>
      </ContainerComponent>
      
    </>
  )
}

export default App
