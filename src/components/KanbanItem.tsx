import { Card, Text, Flex } from "@radix-ui/themes";
import { Draggable } from "@hello-pangea/dnd";
import { useNavigate, useParams } from "react-router-dom";

interface KanbanItemProps {
  title: string;
  description?: string;
  id: string;
  index: number;
  searchTerm?: string;
}

export function KanbanItem({
  title,
  description,
  id,
  index,
  searchTerm = "",
}: KanbanItemProps) {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const isMatching =
    searchTerm.trim() === "" ||
    title.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          size="2"
          onClick={() => navigate(`/projects/${slug}/${id}`)}
          style={{
            cursor: snapshot.isDragging ? "grabbing" : "grab",
            backgroundColor: snapshot.isDragging
              ? "var(--indigo-3)"
              : undefined,
            flexShrink: 0,
            outline:
              searchTerm.trim() !== "" && isMatching
                ? "2px solid var(--blue-9)"
                : "none",
            outlineOffset: "2px",
            transition: "outline 250ms ease",
            ...provided.draggableProps.style,
          }}
        >
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">
              {title}
            </Text>
            {description && (
              <Text size="1" color="gray">
                {description}
              </Text>
            )}
          </Flex>
        </Card>
      )}
    </Draggable>
  );
}
