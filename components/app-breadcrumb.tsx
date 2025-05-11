"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { parseSlugTitle } from "@/lib/utils";

export function AppBreadCrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const getDisplayName = (segment: string, index: number) => {
    if (index === 1 && segments[0] === "anime") {
      return parseSlugTitle(segment);
    }
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  const generateHref = (index: number) => {
    return "/" + segments.slice(0, index + 1).join("/");
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link
              href={"/"}
              className="text-xs text-primary hover:text-secondary"
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1; // false, true
          const name = getDisplayName(segment, index);
          const href = generateHref(index);

          return (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-xs">
                {isLast ? (
                  <span className="text-primary-foreground">{name}</span>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={href}
                      className="text-primary hover:text-secondary"
                    >
                      {name}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
