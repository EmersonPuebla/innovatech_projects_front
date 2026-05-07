import { Box } from "@radix-ui/themes";
import React from "react";

export function BlueprintBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      style={{
        backgroundColor: "var(--gray-2)",
        backgroundImage: `
            radial-gradient(circle at 20% 35%, transparent 0%, var(--gray-1) 80%),
            radial-gradient(circle at 85% 70%, transparent 0%, var(--gray-1) 75%),
            linear-gradient(to right, var(--gray-a4) 1px, transparent 1px),
            linear-gradient(to bottom, var(--gray-a4) 1px, transparent 1px)
          `,
        /* Tamaños enormes para que no se vea el "loop" */
        backgroundSize: "100% 100%, 120% 120%, 60px 40px, 40px 80px",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}
