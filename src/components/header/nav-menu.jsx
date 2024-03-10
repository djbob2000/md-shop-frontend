"use client";

import Link from "next/link";
import headerNavLinks from "@/data/headerNavLinks";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 leading-5 sm:space-x-6">
      {headerNavLinks.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={cn(
            "font-medium text-gray-900 dark:text-gray-100 sm:block ",
            pathname === link.href && "font-bold underline underline-offset-8",
          )}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
