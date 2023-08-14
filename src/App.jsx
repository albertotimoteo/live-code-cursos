import { useState } from "react"
import { coursesDataMock } from "./utils/mock"
import { SCREENS } from "./utils/constants"
import List from "./components/List"
import Details from "./components/Details"

function App() {
  const [coursesData, setCoursesData] = useState(coursesDataMock)
  const [screen, setScreen] = useState(SCREENS.LIST)
  const [selectedCourse, setSelectedCourse] = useState(0)

  function returnScreen() {
    if (screen === SCREENS.LIST) {
      return (
        <List
          coursesData={coursesData}
          setScreen={setScreen}
          setSelectedCourse={setSelectedCourse}
        />
      )
    }
    if (screen === SCREENS.DETAILS) {
      return (
        <Details
          coursesData={coursesData}
          setCoursesData={setCoursesData}
          selectedCourse={selectedCourse}
          setScreen={setScreen}
        />
      )
    }

    return <>Página não encontrada</>
  }

  return <>{returnScreen()}</>
}

export default App
