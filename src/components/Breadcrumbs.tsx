import { Flex, Text, Link } from "@radix-ui/themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Flex align="center" gap="2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {isLast ? (
              <Text size="2" color="gray" weight="medium">
                {item.label}
              </Text>
            ) : (
              <>
                <Link
                  href={item.href}
                  size="2"
                  highContrast
                  color="gray"
                  style={{ textDecoration: "none" }}
                >
                  {item.label}
                </Link>
                <ChevronRightIcon color="gray" width="14" height="14" />
              </>
            )}
          </React.Fragment>
        );
      })}
    </Flex>
  );
}
