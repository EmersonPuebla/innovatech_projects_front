import { useState } from "react";
import { Container, Grid } from "@radix-ui/themes";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import { KanbanList } from "@components/KanbanList";

interface KanbanItem {
  id: string;
  title: string;
  description?: string;
}

interface KanbanData {
  [key: string]: KanbanItem[];
}

const INITIAL_DATA: KanbanData = {
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

export function KanbanContainer() {
  const [data, setData] = useState<KanbanData>(INITIAL_DATA);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    setData((prevData) => {
      const sourceList = [...prevData[source.droppableId]];
      const destList =
        source.droppableId === destination.droppableId
          ? sourceList
          : [...prevData[destination.droppableId]];

      const item = sourceList.find((i) => i.id === draggableId);
      if (!item) return prevData;

      sourceList.splice(source.index, 1);
      destList.splice(destination.index, 0, item);

      return {
        ...prevData,
        [source.droppableId]: sourceList,
        [destination.droppableId]: destList,
      };
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Container size="4">
        <Grid
          columns={{ initial: "1", sm: "2", md: "3", lg: "4" }}
          gap="4"
          style={{ minHeight: "600px" }}
        >
          <KanbanList title="Backlog" listId="backlog" items={data.backlog} />
          <KanbanList
            title="Por Hacer"
            listId="porHacer"
            items={data.porHacer}
          />
          <KanbanList
            title="Haciendo"
            listId="haciendo"
            items={data.haciendo}
          />
          <KanbanList
            title="Terminado"
            listId="terminado"
            items={data.terminado}
          />
        </Grid>
      </Container>
    </DragDropContext>
  );
}
