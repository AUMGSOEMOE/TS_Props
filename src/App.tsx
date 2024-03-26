import Greetomponent from "./components/Greet.component"
import PersonComponent from "./components/Person.component"
import PersonListComponent from "./components/PersonList.component"


function App() {

  const personName = {
    first: "Bruce",
    last:"Wayne"
  }
  const personNameList = [
    {
    first: "Bruce",
    last:"Wayne"
    },
    {
      first: "Clark",
      last:"Kent"
    },
    {
        first: "Diana",
        last:"Prince"
    }
]

  return (
    <>
      <Greetomponent name="Agoe" amount={10} right={false} />
      <PersonComponent name={personName} />
      <PersonListComponent names={personNameList} />
    </>
  )
}

export default App
