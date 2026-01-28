import Link from "next/link";
import { Logo } from "@/components/icons";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo1.png" alt="Saucy's Logo" width={50} height={50} />
          <span className="flex-center text-2xl font-bold font-headline tracking-tight">
           <Image src ="/header.png" alt ="Saucy's header" width={450} height={200}/>
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
