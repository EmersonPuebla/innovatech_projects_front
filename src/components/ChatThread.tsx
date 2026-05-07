import { Box, Flex, Heading } from "@radix-ui/themes";
import { ChatMsg } from "./ChatMsg";

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

export function ChatThread() {
  return (
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
  );
}
