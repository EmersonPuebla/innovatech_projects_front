import { Button, Dialog, Flex } from "@radix-ui/themes";

export function SettingsDialog({
  openSettings,
  setOpenSettings,
}: {
  openSettings: boolean;
  setOpenSettings: (open: boolean) => void;
}) {
  return (
    <>
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
