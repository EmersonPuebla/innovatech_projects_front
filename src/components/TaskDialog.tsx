import {
  Dialog,
  Text,
  Heading,
  TextArea,
  Flex,
  Avatar,
  Box,
  IconButton,
  Tooltip,
  Button,
} from "@radix-ui/themes";
import { FilePlusIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { ChatMsg } from "@components/ChatMsg";

interface TaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskId?: string;
  taskTitle?: string;
}

const MOCK_MESSAGES = [
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

        {/* Chat */}
        <Box
          style={{
            flex: 1,
            overflowY: "auto",
          }}
        >
          <Heading size="3" mb="3">
            Discusión
          </Heading>

          <Flex direction="column" gap="3">
            {MOCK_MESSAGES.map((msg) => (
              <ChatMsg
                key={msg.id}
                author={msg.author}
                avatar={msg.avatar}
                time={msg.time}
                message={msg.message}
                attachments={msg.attachments}
              />
            ))}
          </Flex>
        </Box>

        {/* Input */}
        <Box
          mt="4"
          pt="3"
          style={{
            borderTop: "1px solid var(--gray-5)",
          }}
        >
          <Flex gap="3" align="start">
            <Avatar
              size="2"
              radius="full"
              src="https://github.com/natan.png"
              fallback="N"
            />

            <Box position="relative" flexGrow="1">
              <TextArea
                placeholder="Escribe un mensaje..."
                size="3"
                style={{
                  minHeight: "120px",
                  paddingBottom: "52px",
                  resize: "vertical",
                }}
              />

              <Flex
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                align="center"
                justify="between"
                px="3"
                py="2"
                style={{
                  borderTop: "1px solid var(--gray-a5)",
                }}
              >
                <Tooltip content="Adjuntar archivo">
                  <IconButton
                    type="button"
                    variant="ghost"
                    color="gray"
                    size="2"
                  >
                    <FilePlusIcon width="18" height="18" />
                  </IconButton>
                </Tooltip>

                <Button size="2" variant="classic">
                  Enviar
                  <PaperPlaneIcon />
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  );
}
