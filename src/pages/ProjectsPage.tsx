import { Container, Flex, Grid, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ProjectCard } from "../components/ProjectCard";
import { Header } from "../components/Header";
import { BlueprintBackground } from "../components/BlueprintBackground";

export function ProjectsPage() {
  return (
    <>
      <BlueprintBackground>
        <Header></Header>
        <Container size="3">
          <Flex direction="column" gap="4">
            <TextField.Root placeholder="Buscar proyecto…">
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>

            <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="2">
              <ProjectCard name="Clinica Atlas"></ProjectCard>
              <ProjectCard name="SOS Forestal"></ProjectCard>
              <ProjectCard name="Agro Food Manager"></ProjectCard>
              <ProjectCard name="Eduka"></ProjectCard>
            </Grid>
          </Flex>
        </Container>
      </BlueprintBackground>
    </>
  );
}
