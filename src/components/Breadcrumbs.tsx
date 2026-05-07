import { Flex, Text, Link } from "@radix-ui/themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  pretty?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const formatLabel = (label: string, pretty?: boolean): string => {
  if (!pretty) return label;
  return label
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Flex align="center" gap="2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const displayLabel = formatLabel(item.label, item.pretty);

        return (
          <React.Fragment key={index}>
            {isLast ? (
              <Text size="2" color="gray" weight="medium">
                {displayLabel}
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
                  {displayLabel}
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
