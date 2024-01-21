import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Switch,
} from "@nextui-org/react";

import { ThemeSwitch } from "./SwitchTheme";

import { FreyLogo } from "./icons/FreyLogo.jsx";

export function MainNavbar() {
  const menuItems = [
    {
      label: "Juegos",
      href: "#games",
    },
    {
      label: "Servidores",
      href: "#servers",
    },
    {
      label: "Redes",
      href: "#social",
    },
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <FreyLogo />
          <p className="font-bold text-inherit">Frey</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Frey</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#games">
            Juegos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#servers">
            Servidores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#social">
            Redes
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={"foreground"}
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
