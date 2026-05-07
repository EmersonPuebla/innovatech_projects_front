import { FilePlusIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  TextArea,
  Tooltip,
} from "@radix-ui/themes";

export function ChatInput() {
  return (
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
              <IconButton type="button" variant="ghost" color="gray" size="2">
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
  );
}
