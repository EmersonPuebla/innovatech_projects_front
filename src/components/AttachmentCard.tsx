import { Box, Flex, Text } from "@radix-ui/themes";
import { FilePlusIcon } from "@radix-ui/react-icons";

interface Attachment {
  name: string;
  size: string;
}

interface AttachmentCardProps {
  attachment: Attachment;
}

export function AttachmentCard({ attachment }: AttachmentCardProps) {
  return (
    <Flex
      gap="2"
      align="center"
      style={{
        backgroundColor: "var(--gray-3)",
        borderRadius: "var(--radius-2)",
        padding: "8px",
      }}
    >
      <FilePlusIcon width="16" height="16" />
      <Box>
        <Text size="1" weight="medium">
          {attachment.name}
        </Text>
        <Text size="1" color="gray" ml="2">
          {attachment.size}
        </Text>
      </Box>
    </Flex>
  );
}
