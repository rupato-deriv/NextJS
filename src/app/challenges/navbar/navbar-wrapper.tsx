"use client";

import { createClientComponent } from "@/components/client-component-wrapper";
import NavbarClient from "./navbar-client";

// Create a client-only version of the navbar component
const ClientOnlyNavbar = createClientComponent(NavbarClient);

export default function NavbarWrapper() {
  return <ClientOnlyNavbar />;
}
