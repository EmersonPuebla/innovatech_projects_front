import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  TextField,
  Text,
  Flex,
  Box,
  Heading,
  Callout,
} from "@radix-ui/themes";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

// Mockup credentials
const VALID_CREDENTIALS = {
  email: "admin@innovatech.com",
  password: "123",
};

export function LoginCard() {
  const navigate = useNavigate();
  const passwordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      email === VALID_CREDENTIALS.email &&
      password === VALID_CREDENTIALS.password
    ) {
      setError("");
      navigate("/projects");
    } else {
      setError("Credenciales inválidas");
    }
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      passwordRef.current?.focus();
    }
  };

  const handlePasswordKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

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
            <TextField.Root
              placeholder="alice@mail.com"
              mt="2"
              size="3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleEmailKeyDown}
            />
          </Box>

          <Box>
            <Text as="label" size="2" weight="bold">
              Contraseña
            </Text>
            <TextField.Root
              ref={passwordRef}
              type="password"
              placeholder="••••••••"
              mt="2"
              size="3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handlePasswordKeyDown}
            />
          </Box>
        </Flex>

        {error && (
          <Callout.Root color="red" role="alert">
            <Callout.Icon>
              <ExclamationTriangleIcon />
            </Callout.Icon>
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}

        <Button size="3" onClick={handleLogin}>
          Entrar
        </Button>
      </Flex>
    </Card>
  );
}
