import { Logo } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Saucy's Southern BBQ & Cuisine. All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
