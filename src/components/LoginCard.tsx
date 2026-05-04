import { Card, Button, TextField, Text, Flex, Box, Heading } from '@radix-ui/themes';

export function LoginCard() {
  return (
    <Card style={{ maxWidth: 400, margin: '20px auto' }}>
      <Flex direction="column" gap="4">
        <Box>
          <Heading size="5" mb="1">Iniciar sesión</Heading>
          <Text as="p" size="2" color="gray">
            Ingresa tus credenciales para acceder a tu cuenta
          </Text>
        </Box>

        <Box>
          <Text as="label" size="2" weight="bold">Correo electrónico</Text>
          <TextField.Root placeholder="alice@mail.com" mt="1" />
        </Box>

        <Box>
          <Text as="label" size="2" weight="bold">Contraseña</Text>
          <TextField.Root type="password" placeholder="••••••••" mt="1" />
        </Box>

        <Button size="3" mt="2">
          Entrar
        </Button>
      </Flex>
    </Card>
  );
}