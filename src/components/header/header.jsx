import Link from "next/link";
import Logo from "@/assets/icons/logo-icon.svg";
import { ModeToggle } from "@/components/header/dark-mode-toggle";
import NavMenu from "@/components/header/nav-menu";

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
      <NavMenu />
      <ModeToggle />
    </header>
  );
}
