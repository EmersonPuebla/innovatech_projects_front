import {
  Badge,
  Box,
  DataList,
  Dialog,
  Grid,
  Select,
  Text,
  VisuallyHidden,
} from "@radix-ui/themes";
import { ChatInput } from "./ChatInput";
import { ChatThread } from "./ChatThread";
import { Avatar, Flex } from "@radix-ui/themes/dist/cjs/index.js";

interface TaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskId?: string;
  taskTitle?: string;
}

export function TaskDialog({
  open,
  onOpenChange,
  taskId,
  taskTitle,
}: TaskDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <VisuallyHidden>
        <Dialog.Title>Detalles de la Tarea: {taskTitle}</Dialog.Title>

        <Dialog.Description>
          {/* TODO: Poner la descripcion real de la tarea aqui */}
        </Dialog.Description>
      </VisuallyHidden>

      <Dialog.Content
        style={{
          maxHeight: "90vh",
          minWidth: "85vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Flex direction="row">
          <Box>
            {/* Header */}
            <Box mb="4">
              <Dialog.Title size="7">
                {taskTitle || "Detalles de la tarea"}
              </Dialog.Title>

              <Text color="gray">
                Implementar la autenticación JWT para toda la aplicación.
                Incluir validación de tokens, refresh tokens y manejo de
                errores.
              </Text>
            </Box>

            <ChatThread />
            <ChatInput />
          </Box>
          <Box
            ml="3"
            width="450px"
            pl="3"
            style={{
              borderLeft: "1px solid var(--gray-a5)",
            }}
          >
            <Flex direction="column" gap="3">
              <DataList.Item>
                <DataList.Label minWidth="88px">Asignados</DataList.Label>
                <DataList.Value>
                  <Flex direction="row" gap="2">
                    <Avatar
                      size="2"
                      radius="full"
                      src="https://github.com/natan.png"
                      fallback="N"
                    />
                    <Avatar
                      size="2"
                      radius="full"
                      src="https://github.com/natan.png"
                      fallback="N"
                    />
                    <Avatar
                      size="2"
                      radius="full"
                      src="https://github.com/natan.png"
                      fallback="N"
                    />
                    <Avatar
                      size="2"
                      radius="full"
                      src="https://github.com/natan.png"
                      fallback="N"
                    />

                  </Flex>
                </DataList.Value>
              </DataList.Item>

              <DataList.Item>
                <DataList.Label minWidth="88px">Etiquetas</DataList.Label>
                <DataList.Value>

                  <Grid gap="1" columns="2">
                    <Badge color="yellow">Mejora</Badge>
                    <Badge color="red">Bug</Badge>
                    <Badge>Docs</Badge>
                    <Badge color="indigo">API</Badge>
                    <Badge color="green">Seguridad</Badge>

                  </Grid>


                </DataList.Value>
              </DataList.Item>

              <DataList.Item>
                <DataList.Label minWidth="88px">Fecha de inicio</DataList.Label>
                <DataList.Value>
                  <input type="date"></input>
                </DataList.Value>
              </DataList.Item>

              <DataList.Item>
                <DataList.Label minWidth="88px">Fecha de entrega</DataList.Label>
                <DataList.Value>
                  <input type="date"></input>
                </DataList.Value>
              </DataList.Item>


              <DataList.Root orientation={{ initial: "vertical" }}>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Prioridad</DataList.Label>
                  <DataList.Value>

                    <Select.Root defaultValue="low">
                      <Select.Trigger />
                      <Select.Content>
                        <Select.Group>
                          <Select.Item value="low">Baja</Select.Item>
                          <Select.Item value="mid">Media</Select.Item>
                          <Select.Item value="high">Alta</Select.Item>
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>


                  </DataList.Value>
                </DataList.Item>

                <DataList.Item>
                  <DataList.Label minWidth="88px">Tamaño de tarea</DataList.Label>
                  <DataList.Value>
                    <Select.Root defaultValue="s">
                      <Select.Trigger />
                      <Select.Content>
                        <Select.Group>
                          <Select.Item value="xs">Muy pequeña</Select.Item>
                          <Select.Item value="s">Pequeña</Select.Item>
                          <Select.Item value="m">Mediana</Select.Item>
                          <Select.Item value="x">Grande</Select.Item>
                          <Select.Item value="xl">Muy grande</Select.Item>
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                  </DataList.Value>
                </DataList.Item>


              </DataList.Root>
            </Flex>
          </Box>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
