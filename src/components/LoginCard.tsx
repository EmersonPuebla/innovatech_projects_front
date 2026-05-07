import {
  Card,
  Button,
  TextField,
  Text,
  Flex,
  Box,
  Heading,
} from "@radix-ui/themes";

export function LoginCard() {
  return (
    <Card size="3" style={{ width: 400 }}>
      <Flex direction="column" gap="5">
        <Box>
          <Heading size="6" mb="1">
            Iniciar sesión
          </Heading>
          <Text as="p" size="2" color="gray">
            Ingresa tus credenciales para acceder a tu cuenta
          </Text>
        </Box>

        <Flex direction="column" gap="3">
          <Box>
            <Text as="label" size="2" weight="bold">
              Correo electrónico
            </Text>
            <TextField.Root placeholder="alice@mail.com" mt="2" size="3" />
          </Box>

          <Box>
            <Text as="label" size="2" weight="bold">
              Contraseña
            </Text>
            <TextField.Root
              type="password"
              placeholder="••••••••"
              mt="2"
              size="3"
            />
          </Box>
        </Flex>

        <Button size="3">Entrar</Button>
      </Flex>
    </Card>
  );
}
