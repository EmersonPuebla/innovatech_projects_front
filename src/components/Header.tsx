import { Box, Container, Flex } from "@radix-ui/themes";
import { UserMenu } from "@components/UserMenu";
import { Breadcrumbs, type BreadcrumbItem } from "@components/Breadcrumbs";

interface HeaderProps {
  breadcrumbs?: BreadcrumbItem[];
}

export function Header({
  breadcrumbs = [{ label: "Proyectos" }],
}: HeaderProps) {
  return (
    <Box
      width="100%"
      py="2"
      mb="5"
      style={{ borderBottom: "1px solid var(--gray-5)" }}
    >
      <Container size="4" mr="4" ml="4">
        <Flex justify="between" align="center">
          <Breadcrumbs items={breadcrumbs} />
          <UserMenu />
        </Flex>
      </Container>
    </Box>
  );
}
