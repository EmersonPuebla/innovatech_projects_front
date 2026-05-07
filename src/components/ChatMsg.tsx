import { Box, Flex, Text, Avatar } from "@radix-ui/themes";
import { AttachmentCard } from "@components/AttachmentCard";

interface Attachment {
  name: string;
  size: string;
}

interface ChatMessageProps {
  author: string;
  avatar: string;
  time: string;
  message: string;
  attachments?: Attachment[];
}

export function ChatMsg({
  author,
  avatar,
  time,
  message,
  attachments = [],
}: ChatMessageProps) {
  return (
    <Box
      style={{
        backgroundColor: "var(--gray-2)",
        borderRadius: "var(--radius-2)",
        padding: "12px",
      }}
    >
      <Flex gap="3" mb="2">
        <Avatar
          radius="full"
          size="2"
          src={avatar}
          fallback={author[0]}
        />
        <Box>
          <Flex gap="2" align="center">
            <Text size="2" weight="bold">
              {author}
            </Text>
            <Text size="1" color="gray">
              {time}
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Text size="2" mb={attachments.length > 0 ? "2" : "0"}>
        {message}
      </Text>
      {attachments.length > 0 && (
        <Flex direction="column" gap="1" mt="2">
          {attachments.map((file, idx) => (
            <AttachmentCard key={idx} attachment={file} />
          ))}
        </Flex>
      )}
    </Box>
  );
}
