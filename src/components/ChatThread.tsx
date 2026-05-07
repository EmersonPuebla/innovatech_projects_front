import { Box, Flex, Heading } from "@radix-ui/themes";
import { ChatMsg } from "./ChatMsg";
import { MOCK_MESSAGES } from "@data/mock";

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
