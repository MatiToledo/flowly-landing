"use client";

import { Menu } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Caracteristicas", href: "#features" },
  { name: "Testimonios", href: "#testimonials" },
  { name: "Preguntas Frecuentes", href: "#faq" },
];

export function BurgerMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(true)}
        className="lg:hidden absolute right-4 top-4 z-50">
        <Menu className="h-5 w-5" />
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-2 py-1 text-lg"
                onClick={() => setOpen(false)}>
                {item.name}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
