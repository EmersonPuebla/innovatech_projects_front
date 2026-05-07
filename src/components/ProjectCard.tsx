import { useNavigate } from "react-router-dom";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Card, Text, Flex } from "@radix-ui/themes";

export function ProjectCard({ name }: { name: string }) {
  const navigate = useNavigate();
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Card
      variant="surface"
      size="2"
      onClick={() => navigate(`/projects/${slug}`)}
      style={{
        minHeight: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <Text as="div" size="4" weight="bold" highContrast>
        {name}
      </Text>

      <Flex justify="end">
        <Text size="1" color="indigo" weight="medium">
          <ArrowTopRightIcon></ArrowTopRightIcon>
        </Text>
      </Flex>
    </Card>
  );
}
