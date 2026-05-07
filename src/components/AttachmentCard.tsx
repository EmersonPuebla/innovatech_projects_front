import { Flex, Text, Tooltip } from "@radix-ui/themes";
import { DownloadIcon, FileIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes/dist/cjs/index.js";

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
      align="center"
      p="3"
      justify="between"
      style={{
        backgroundColor: "var(--gray-4)",
        borderRadius: "var(--radius-5)",
      }}
    >
      <Flex direction="row" gap="2">
        <FileIcon width="18" height="18" />
        <Text size="1" weight="medium">
          {attachment.name}
        </Text>
        <Text size="1" color="gray">
          {attachment.size}
        </Text>
      </Flex>
      <Tooltip content="Descargar archivo">
        <IconButton
          variant="ghost"
          color="gray"
          size="2"
          mr="2"
          style={{
            cursor: "pointer",
          }}
        >
          <DownloadIcon />
        </IconButton>
      </Tooltip>
    </Flex>
  );
}
