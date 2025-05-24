"use client";

import { createClientComponent } from "@/components/client-component-wrapper";
import TwoSumClient from "./two-sum-client";

// Create a client-only version of the two-sum component
const ClientOnlyTwoSum = createClientComponent(TwoSumClient);

export default function TwoSumWrapper() {
  return <ClientOnlyTwoSum />;
}
