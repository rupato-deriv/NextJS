"use client";

import { createClientComponent } from "@/components/client-component-wrapper";
import CalculatorClient from "./calculator-client";

// Create a client-only version of the calculator component
const ClientOnlyCalculator = createClientComponent(CalculatorClient);

export default function CalculatorWrapper() {
  return <ClientOnlyCalculator />;
}
