import { Box, Container, Flex } from "@radix-ui/themes";
import { UserMenu } from "./UserMenu";
import { Breadcrumbs } from "./Breadcrumbs";

export function Header() {
  return (
    <Box
      width="100%"
      py="2"
      mb="5"
      style={{ borderBottom: "1px solid var(--gray-5)" }}
    >
      <Container size="4">
        <Flex justify="between" align="center">
          <Breadcrumbs items={[{ label: "Proyectos" }]} />
          <UserMenu />
        </Flex>
      </Container>
    </Box>
  );
}
