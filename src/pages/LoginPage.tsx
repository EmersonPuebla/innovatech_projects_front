import { Flex } from "@radix-ui/themes";
import { GridBackground } from "../components/GridBackground";
import { LoginCard } from "../components/LoginCard";

export function LoginPage() {
  return (
    <>
      <GridBackground>
        <Flex align="center" justify="center" style={{ minHeight: "100vh" }}>
          <LoginCard />
        </Flex>
      </GridBackground>
    </>
  );
}
