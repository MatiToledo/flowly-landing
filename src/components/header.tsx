/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BurgerMenu } from "./menu";

export default function Header() {
  return (
    <header className="flex w-full mx-auto shrink-0 items-center px-4 md:px-6 lg:px-8 py-4">
      <a href="#" className="mr-6">
        <img src="/logo.png" width={40} height={40} alt="logo" />
      </a>
      <BurgerMenu></BurgerMenu>
      <div className="hidden lg:flex lg:gap-4">
        <a href="#home">Home</a>
        <a href="#features">Características</a>
        <a href="#testimonials">Testimonios</a>
        <a href="#faq">FAQ</a>
      </div>
    </header>
  );
}
