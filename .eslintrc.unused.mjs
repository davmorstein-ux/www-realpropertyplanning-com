import unused from "eslint-plugin-unused-imports";
import tsparser from "@typescript-eslint/parser";
export default [{
  files: ["src/**/*.{ts,tsx}"],
  languageOptions: { parser: tsparser, ecmaVersion: 2020, sourceType: "module", parserOptions: { ecmaFeatures: { jsx: true } } },
  plugins: { "unused-imports": unused },
  rules: { "unused-imports/no-unused-imports": "error" }
}];
