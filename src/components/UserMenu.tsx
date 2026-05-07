import { ExitIcon, GearIcon } from "@radix-ui/react-icons";
import { Flex, DropdownMenu, Avatar, Text, Box } from "@radix-ui/themes";

export function UserMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Flex
          align="center"
          gap="3"
          style={{
            cursor: "pointer",
            padding: "4px 8px",
            borderRadius: "var(--radius-2)",
          }}
        >
          <Avatar
            radius="full"
            size="2"
            src="https://i.pravatar.cc/300"
            fallback="U"
          />
          <Box>
            <Text as="div" size="2" weight="bold" style={{ lineHeight: "1" }}>
              Foo Xyan
            </Text>
            <Text as="div" size="1" color="gray">
              Ingeniero
            </Text>
          </Box>
        </Flex>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content variant="soft">
        <DropdownMenu.Item>
          <GearIcon /> Configuración
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item color="red">
          <ExitIcon /> Cerrar sesión
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
