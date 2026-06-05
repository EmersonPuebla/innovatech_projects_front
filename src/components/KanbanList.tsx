import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { Droppable } from "@hello-pangea/dnd";
import { KanbanItem } from "@components/KanbanItem";
import { PlusIcon } from "@radix-ui/react-icons";

interface KanbanListProps {
  title: string;
  listId: string;
  items?: Array<{
    id: string;
    title: string;
    description?: string;
  }>;
}

export function KanbanList({ title, listId, items = [] }: KanbanListProps) {
  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: "var(--gray-2)",
        borderRadius: "var(--radius-2)",
        padding: "16px",
        height: "600px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Flex justify={"between"} mb="4">
        <Flex direction={"column"}>
          <Text size="4" weight="bold" style={{ marginBottom: "12px" }}>
            {title}
          </Text>
          <Text mt="-3" size={"2"} color="gray">
            {items.length === 0
              ? "Sin tareas"
              : items.length > 1
                ? items.length + " Tareas"
                : items.length + " Tarea"}
          </Text>
        </Flex>

        <IconButton
          variant="surface"
          size={"2"}
          style={{
            cursor: "pointer",
          }}
        >
          <PlusIcon></PlusIcon>
        </IconButton>
      </Flex>

      <Droppable droppableId={listId} type="CARD">
        {(provided, snapshot) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              backgroundColor: snapshot.isDraggingOver
                ? "var(--gray-3)"
                : undefined,
              borderRadius: "var(--radius-2)",
              padding: "4px",
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              transition: "background-color 0.2s",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {items.map((item, index) => (
              <KanbanItem
                key={item.id}
                id={item.id}
                index={index}
                title={item.title}
                description={item.description}
              />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
}
