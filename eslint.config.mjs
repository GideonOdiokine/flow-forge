import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // keep Next.js recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // 👇 relaxed rules
      "@typescript-eslint/no-explicit-any": "off", // allow 'any'
      "@typescript-eslint/no-unused-vars": "warn", // warn instead of error
      "@typescript-eslint/explicit-module-boundary-types": "off", // no forced return types
      "@typescript-eslint/no-non-null-assertion": "off" // allow `!` operator
    },
  },
];

export default eslintConfig;
