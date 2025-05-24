import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Base configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Global settings
  {
    ignores: ["**/node_modules/**", "**/.next/**", "**/out/**", "**/dist/**"],
  },
  
  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Enforce consistent type imports
      "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
      
      // Prevent unused variables
      "@typescript-eslint/no-unused-vars": ["warn", { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_" 
      }],
      
      // Enforce consistent React component definitions
      "react/function-component-definition": ["warn", {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function"
      }],
      
      // Enforce consistent React hooks usage
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // Enforce accessibility best practices
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/aria-props": "warn",
      
      // Enforce consistent imports
      "import/order": ["warn", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }],
    }
  },
  
  // JavaScript files
  {
    files: ["**/*.js", "**/*.mjs"],
    rules: {
      // Prevent console logs in production
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      
      // Enforce consistent quotes
      "quotes": ["warn", "double", { "avoidEscape": true }],
      
      // Enforce consistent semicolons
      "semi": ["warn", "always"],
    }
  }
];

export default eslintConfig;
