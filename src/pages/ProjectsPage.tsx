import { useState } from "react";
import { Container, Flex, Grid, TextField, Text } from "@radix-ui/themes";
import { InfoCircledIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ProjectCard } from "@components/ProjectCard";
import { Header } from "@components/Header";
import { BlueprintBackground } from "@components/BlueprintBackground";

// Mockup projects
const PROJECTS = [
  "Clinica Atlas",
  "SOS Forestal",
  "Agro Food Manager",
  "Eduka",
];

export function ProjectsPage() {
  const [search, setSearch] = useState("");

  const filteredProjects = PROJECTS.filter((project) =>
    project.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <BlueprintBackground>
        <Header></Header>
        <Container size="3" ml="4" mr="4">
          <Flex direction="column" gap="4">
            <TextField.Root
              placeholder="Buscar proyecto…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              size="3"
            >
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>

            {filteredProjects.length > 0 ? (
              <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="2">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project} name={project}></ProjectCard>
                ))}
              </Grid>
            ) : (
              <Flex
                justify="center"
                align="center"
                style={{ minHeight: "300px" }}
              >
                <Text size="3" color="gray" align="center">
                  <InfoCircledIcon /> Sin coincidencias :(
                </Text>
              </Flex>
            )}
          </Flex>
        </Container>
      </BlueprintBackground>
    </>
  );
}
