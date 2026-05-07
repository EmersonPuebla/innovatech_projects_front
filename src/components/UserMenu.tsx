import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExitIcon, GearIcon } from "@radix-ui/react-icons";
import {
  Flex,
  DropdownMenu,
  Avatar,
  Text,
  Box,
  Dialog,
  Button,
} from "@radix-ui/themes";

export function UserMenu() {
  const navigate = useNavigate();
  const [openSettings, setOpenSettings] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
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
          <DropdownMenu.Item onClick={() => setOpenSettings(true)}>
            <GearIcon /> Configuración
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item color="red" onClick={handleLogout}>
            <ExitIcon /> Cerrar sesión
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <Dialog.Root open={openSettings} onOpenChange={setOpenSettings}>
        <Dialog.Content>
          <Dialog.Title>Configuración</Dialog.Title>
          <Dialog.Description>
            {/* TODO: Content here x~X */}
          </Dialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cerrar
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
