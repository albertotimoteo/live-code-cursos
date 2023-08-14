import { SCREENS } from "../../utils/constants"

const List = ({ coursesData, setScreen, setSelectedCourse }) => (
  <div>
    {coursesData.map((course) => (
      <div key={course.id}>
        <h3>{course.title}</h3>
        <p>Progresso {Math.floor(course.progress)}%</p>
        <p>Duração {course.hours} horas</p>
        <button
          onClick={() => {
            setSelectedCourse(course.id)
            setScreen(SCREENS.DETAILS)
          }}
        >
          Ir para detalhes
        </button>
      </div>
    ))}
  </div>
)

export default List
