import { BlueprintBackground } from "@components/BlueprintBackground";
import { Header } from "@components/Header";
import { KanbanContainer } from "@components/KanbanContainer";
import { TaskDialog } from "@components/TaskDialog";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Button, Container, Flex, TextField } from "@radix-ui/themes";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ProjectDetailsPage = () => {
  const { slug, taskId } = useParams<{ slug: string; taskId?: string }>();
  const [taskDetailOpen, setTaskDetailOpen] = useState(false);

  useEffect(() => {
    const init = async () => {
      await setTaskDetailOpen(!!taskId);
    };
    init();
  }, [taskId]);

  const breadcrumbs = [
    { label: "Proyectos", href: "/projects" },
    { label: slug || "Detalles", pretty: true },
  ];

  return (
    <>
      <BlueprintBackground>
        <Header breadcrumbs={breadcrumbs} />
        <Container size="4" ml="4" mr="4">
          <h1>{slug}</h1>
          <Flex width="100%" align="center" gap="3" mb="4">
            <Box flexGrow="1">
              <TextField.Root placeholder="Buscar Tarea…" size="3">
                <TextField.Slot>
                  <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            </Box>
          </Flex>
          <KanbanContainer />
          <TaskDialog
            open={taskDetailOpen}
            onOpenChange={(open) => {
              setTaskDetailOpen(open);
              if (!open) {
                window.history.back();
              }
            }}
            taskId={taskId}
            taskTitle={`Tarea ${taskId}`}
          />
        </Container>
      </BlueprintBackground>
    </>
  );
};
