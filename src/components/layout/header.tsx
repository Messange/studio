import Link from "next/link";
import { Logo } from "@/components/icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-headline tracking-tight">
            Saucy's Southern BBQ
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#main-content" className="text-foreground/60 transition-colors hover:text-foreground">Menu</a>
          <a href="#main-content" className="text-foreground/60 transition-colors hover:text-foreground">Order</a>
          <a href="#main-content" className="text-foreground/60 transition-colors hover:text-foreground">Location</a>
          <a href="#main-content" className="text-foreground/60 transition-colors hover:text-foreground">Careers</a>
        </nav>
      </div>
    </header>
  );
}
