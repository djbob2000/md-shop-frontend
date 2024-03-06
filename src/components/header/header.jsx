import Link from "./Link";
import headerNavLinks from "@/data/headerNavLinks";
import Logo from "@/assets/icons/logo.svg";
import { ModeToggle } from "@/components/header/dark-mode-toggle";

export function Header() {
  return (
    <header className="container flex items-center justify-between py-10">
      <div>
        <Link href="/">
          <div className="mr-3 dark:text-white">
            <Logo width={240} height={40} />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <ModeToggle />
    </header>
  );
}
