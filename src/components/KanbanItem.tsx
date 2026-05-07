import { Card, Text, Flex } from "@radix-ui/themes";
import { Draggable } from "@hello-pangea/dnd";
import { useNavigate, useParams } from "react-router-dom";

interface KanbanItemProps {
  title: string;
  description?: string;
  id: string;
  index: number;
}

export function KanbanItem({ title, description, id, index }: KanbanItemProps) {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const handleClick = () => {
    navigate(`/projects/${slug}/${id}`);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          size="2"
          onClick={handleClick}
          style={{
            cursor: snapshot.isDragging ? "grabbing" : "grab",
            backgroundColor: snapshot.isDragging
              ? "var(--indigo-3)"
              : undefined,
            flexShrink: 0,
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
