import { Box } from "@radix-ui/themes";
import React from "react";

export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <Box
      style={{
        backgroundColor: "var(--gray-1)",
        backgroundImage: `radial-gradient(var(--gray-a4) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}
