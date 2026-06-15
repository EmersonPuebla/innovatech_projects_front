import { useState } from "react";
import {
  Container,
  Flex,
  Grid,
  TextField,
  Text,
  IconButton,
  Box,
  Tooltip,
} from "@radix-ui/themes";
import {
  InfoCircledIcon,
  MagnifyingGlassIcon,
  GridIcon,
  ListBulletIcon,
} from "@radix-ui/react-icons";
import { ProjectCard } from "@components/ProjectCard";
import { Header } from "@components/Header";
import { BlueprintBackground } from "@components/BlueprintBackground";
import { MOCK_PROJECTS } from "@data/mock";

export function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredProjects = MOCK_PROJECTS.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <BlueprintBackground>
        <Header></Header>
        <Container size="3" ml="4" mr="4">
          <Flex direction="column" gap="4">
            <Flex gap="3" width="100%">
              <TextField.Root
                placeholder="Buscar proyecto…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="3"
                style={{ flexGrow: 1 }}
              >
                <TextField.Slot>
                  <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>

              <Box display={{ initial: "none", sm: "block" }}>
                <Tooltip
                  content={
                    viewMode === "grid"
                      ? "Cambiar a vista de lista"
                      : "Cambiar a vista de cuadrícula"
                  }
                >
                  <IconButton
                    type="button"
                    size="3"
                    variant="soft"
                    color="gray"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      setViewMode(viewMode === "grid" ? "list" : "grid")
                    }
                  >
                    {viewMode === "grid" ? (
                      <ListBulletIcon height="18" width="18" />
                    ) : (
                      <GridIcon height="18" width="18" />
                    )}
                  </IconButton>
                </Tooltip>
              </Box>
            </Flex>

            {filteredProjects.length > 0 ? (
              <>
                <Box display={{ initial: "block", sm: "none" }}>
                  <Flex direction="column" gap="2">
                    {filteredProjects.map((project) => (
                      <ProjectCard
                        key={project.name}
                        name={project.name}
                        description={project.description}
                      ></ProjectCard>
                    ))}
                  </Flex>
                </Box>

                <Box display={{ initial: "none", sm: "block" }}>
                  {viewMode === "grid" ? (
                    <Grid columns={{ sm: "2", md: "3" }} gap="2">
                      {filteredProjects.map((project) => (
                        <ProjectCard
                          key={project.name}
                          name={project.name}
                          description={project.description}
                        ></ProjectCard>
                      ))}
                    </Grid>
                  ) : (
                    <Flex direction="column" gap="2">
                      {filteredProjects.map((project) => (
                        <ProjectCard
                          key={project.name}
                          name={project.name}
                          description={project.description}
                        ></ProjectCard>
                      ))}
                    </Flex>
                  )}
                </Box>
              </>
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
