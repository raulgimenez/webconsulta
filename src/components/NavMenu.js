"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="mt-6 pt-6 flex justify-center space-x-8 text-gray-700 group border-t border-neutral-200/80">
      <Link 
        href="/" 
        className={cn(
          "text-lg font-medium transition-colors duration-200",
          pathname === "/" 
            ? "text-black border-b-2 border-black pb-1" 
            : "hover:text-black"
        )}
      >
        Inici
      </Link>
      <Link
        href="/serveis"
        className={cn(
          "text-lg font-medium transition-colors duration-200",
          pathname === "/serveis" 
            ? "text-black border-b-2 border-black pb-1" 
            : "hover:text-black"
        )}
      >
        Serveis
      </Link>
      <Link
        href="/profile"
        className={cn(
          "text-lg font-medium transition-colors duration-200",
          pathname === "/profile" 
            ? "text-black border-b-2 border-black pb-1" 
            : "hover:text-black"
        )}
      >
        Trajectòria
      </Link>
      <Link
        href="/contacte"
        className={cn(
          "text-lg font-medium transition-colors duration-200",
          pathname === "/contacte" 
            ? "text-black border-b-2 border-black pb-1" 
            : "hover:text-black"
        )}
      >
        Contacte
      </Link>
    </nav>
  );
} 