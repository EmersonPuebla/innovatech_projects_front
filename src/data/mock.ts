export const MOCK_CREDENTIALS = {
  email: "admin@innovatech.com",
  password: "123",
};

export const MOCK_MESSAGES = [
  {
    id: 1,
    author: "Juan García",
    avatar: "https://i.pravatar.cc/300?u=juan",
    time: "hace 2 horas",
    message: "He empezado a trabajar en la API de autenticación",
    attachments: [],
  },
  {
    id: 2,
    author: "María López",
    avatar: "https://i.pravatar.cc/300?u=maria",
    time: "hace 1 hora",
    message: "Pasame los endpoints que necesitas que implemente",
    attachments: [
      {
        name: "endpoints.pdf",
        size: "2.5 MB",
      },
      {
        name: "schema.json",
        size: "145 KB",
      },
    ],
  },
  {
    id: 3,
    author: "Juan García",
    avatar: "https://i.pravatar.cc/300?u=juan",
    time: "hace 30 minutos",
    message: "Perfecto, ya los implementé. Revisar cuando puedas",
    attachments: [],
  },
];

export const MOCK_PROJECTS = [
  "Clinica Atlas",
  "SOS Forestal",
  "Agro Food Manager",
  "Eduka",
];

export interface KanbanItem {
  id: string;
  title: string;
  description?: string;
}

export interface KanbanData {
  [key: string]: KanbanItem[];
}

export const MOCK_KANBAN: KanbanData = {
  backlog: [
    { id: "1", title: "Diseñar interfaz de login", description: "UI/UX" },
    { id: "2", title: "Setup base de datos", description: "Backend" },
    { id: "3", title: "Documentar API", description: "Documentación" },
    { id: "4", title: "Definir estructura de carpetas", description: "DevOps" },
    { id: "5", title: "Crear mockups", description: "UI/UX" },
  ],
  porHacer: [
    { id: "6", title: "Implementar autenticación", description: "Backend" },
    { id: "7", title: "Crear componentes base", description: "Frontend" },
    { id: "8", title: "Configurar base de datos", description: "Backend" },
  ],
  haciendo: [
    { id: "9", title: "Crear API REST", description: "Backend" },
    { id: "10", title: "Tests unitarios", description: "QA" },
    { id: "11", title: "Integrar autenticación", description: "Frontend" },
    { id: "12", title: "Validaciones en formularios", description: "Frontend" },
  ],
  terminado: [
    { id: "13", title: "Configurar proyecto", description: "DevOps" },
    { id: "14", title: "Setup CI/CD", description: "DevOps" },
    { id: "15", title: "Crear repo git", description: "DevOps" },
    { id: "16", title: "Setup eslint", description: "DevOps" },
    { id: "17", title: "Configurar prettier", description: "DevOps" },
    { id: "18", title: "Crear archivo README", description: "Documentación" },
  ],
};
