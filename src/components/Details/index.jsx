import { SCREENS } from "../../utils/constants"

const Details = ({
  selectedCourse,
  coursesData,
  setCoursesData,
  setScreen,
}) => {
  const [course] = coursesData.filter(
    (courses) => courses.id === selectedCourse
  )

  function modifyCourse(lessonId) {
    const lessonsNumber = course.lessons.length
    const lessonsCopy = course.lessons.map((lesson) => {
      if (lesson.id === lessonId) {
        return {
          ...lesson,
          completed: !lesson.completed,
        }
      }
      return lesson
    })
    const completed = lessonsCopy.reduce((accumulator, currentValue) => {
      if (currentValue.completed) {
        return accumulator + 1
      }
      return accumulator
    }, 0)

    const progress = (100 / lessonsNumber) * completed

    const coursesDataCopy = coursesData.map((currentCourse) => {
      if (currentCourse.id === selectedCourse) {
        return {
          ...currentCourse,
          progress: progress,
          lessons: [...lessonsCopy],
        }
      }
      return currentCourse
    })

    setCoursesData(coursesDataCopy)
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <h3>Duração total do curso: {course.hours} horas</h3>
      <p>{course.description}</p>
      <p>Aulas: </p>
      <ol>
        {course.lessons.map((lesson) => (
          <li>
            {lesson.title}
            <input
              type="checkbox"
              checked={lesson.completed}
              onChange={() => modifyCourse(lesson.id)}
            />
          </li>
        ))}
      </ol>
      <button onClick={() => setScreen(SCREENS.LIST)}>Voltar à lista</button>
    </div>
  )
}

export default Details
