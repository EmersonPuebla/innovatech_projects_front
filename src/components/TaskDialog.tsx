import { Box, Dialog, Text } from "@radix-ui/themes";
import { ChatInput } from "./ChatInput";
import { ChatThread } from "./ChatThread";

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
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box mb="4">
          <Dialog.Title size="7">
            {taskTitle || "Detalles de la tarea"}
          </Dialog.Title>

          <Text color="gray">
            Implementar la autenticación JWT para toda la aplicación. Incluir
            validación de tokens, refresh tokens y manejo de errores.
          </Text>
        </Box>

        <ChatThread />
        <ChatInput />
      </Dialog.Content>
    </Dialog.Root>
  );
}
