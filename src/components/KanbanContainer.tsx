import { useState } from "react";
import { Container, Grid } from "@radix-ui/themes";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import { KanbanList } from "@components/KanbanList";
import { MOCK_KANBAN, type KanbanData } from "@data/mock";

export function KanbanContainer({ searchTerm = "" }: { searchTerm?: string }) {
  const [data, setData] = useState<KanbanData>(MOCK_KANBAN);

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
          <KanbanList
            title="Backlog"
            listId="backlog"
            items={data.backlog}
            searchTerm={searchTerm}
          />
          <KanbanList
            title="Por Hacer"
            listId="porHacer"
            items={data.porHacer}
            searchTerm={searchTerm}
          />
          <KanbanList
            title="Haciendo"
            listId="haciendo"
            items={data.haciendo}
            searchTerm={searchTerm}
          />
          <KanbanList
            title="Terminado"
            listId="terminado"
            items={data.terminado}
            searchTerm={searchTerm}
          />
        </Grid>
      </Container>
    </DragDropContext>
  );
}
