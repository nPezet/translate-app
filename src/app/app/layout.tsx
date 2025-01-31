"use client";
import BurgerMenu from "@/components/atoms/BurgerMenu";
import SideNav from "@/components/molecules/SideNav";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [displayedSideNav, setDisplayedSideNav] = useState(false);

  return (
    <>
      <BurgerMenu
        handleToggle={() => setDisplayedSideNav((p) => !p)}
        toggled={displayedSideNav}
      />
      <SideNav
        displayed={displayedSideNav}
        handleNav={() => setDisplayedSideNav(false)}
      />
      {children}
    </>
  );
}
