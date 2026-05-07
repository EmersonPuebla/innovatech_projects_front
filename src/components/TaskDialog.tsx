import { Box, Dialog, Separator, Text } from "@radix-ui/themes";
import { ChatInput } from "./ChatInput";
import { ChatThread } from "./ChatThread";
import { Avatar, Flex } from "@radix-ui/themes/dist/cjs/index.js";

interface TaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskId?: string;
  taskTitle?: string;
}

export function TaskDialog({
  open,
  onOpenChange,
  taskId,
  taskTitle,
}: TaskDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Content
        style={{
          maxHeight: "90vh",
          minWidth: "85vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Flex direction="row">
          <Box>
            {/* Header */}
            <Box mb="4">
              <Dialog.Title size="7">
                {taskTitle || "Detalles de la tarea"}
              </Dialog.Title>

              <Text color="gray">
                Implementar la autenticación JWT para toda la aplicación.
                Incluir validación de tokens, refresh tokens y manejo de
                errores.
              </Text>
            </Box>

            <ChatThread />
            <ChatInput />
          </Box>
          <Box
            ml="3"
            width="450px"
            pl="3"
            style={{
              borderLeft: "1px solid var(--gray-a5)",
            }}
          >
            <Flex direction="column" gap="3">
              <Text weight="bold">Asignados</Text>

              <Text weight="bold">Etiquetas</Text>

              <Text weight="bold">Fecha de Inicio</Text>

              <Text weight="bold">Fecha de Entrega</Text>

              <Text weight="bold">Prioridad</Text>

              <Text weight="bold">Tamaño de tarea</Text>
            </Flex>
          </Box>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
