export const coursesDataMock = [
  {
    id: 1,
    title: "Introdução à Programação",
    hours: 10,
    description: "Um curso introdutório sobre conceitos de programação.",
    progress: 0,
    lessons: [
      { id: 1, title: "O que é Programação", completed: false, duration: 30 },
      {
        id: 2,
        title: "Variáveis e Tipos de Dados",
        completed: false,
        duration: 45,
      },
      {
        id: 3,
        title: "Estruturas de Controle",
        completed: false,
        duration: 60,
      },
    ],
  },
  {
    id: 2,
    title: "Desenvolvimento Web com React",
    hours: 20,
    description: "Aprenda a criar aplicativos web modernos com React.",
    progress: 0,
    lessons: [
      { id: 1, title: "Introdução ao React", completed: false, duration: 40 },
      { id: 2, title: "Componentes e Props", completed: false, duration: 55 },
      {
        id: 3,
        title: "Estado e Ciclo de Vida",
        completed: false,
        duration: 50,
      },
      {
        id: 4,
        title: "Roteamento com React Router",
        completed: false,
        duration: 70,
      },
    ],
  },
]
