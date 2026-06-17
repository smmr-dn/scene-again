import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, "simple-import-sort": simpleImportSort },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-useless-catch": "off",
      "sort-imports": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "react/prop-types": "off",
    },
  },
]);
