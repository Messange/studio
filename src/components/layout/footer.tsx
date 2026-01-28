import { Logo } from "@/components/icons";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Image src="/logo1.png" alt="Saucy's Logo" width={32} height={32}/>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Saucy's Southern BBQ & Cuisine. All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
            </a>
        </div>
      </div>
    </footer>
  );
}
