import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin"
import eslintParserTypeScript from "@typescript-eslint/parser"

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
        project: "./tsconfig.json", // Point to your TypeScript config
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        module: "readonly",
        require: "readonly",
        React: "readonly", // Add React to globals
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypeScript,
    },
    rules: {
      indent: ["error", 2],
      "@typescript-eslint/no-explicit-any": "warn",
      quotes: ["error", "double"],
      semi: "off",
      "react/jsx-uses-react": "off", // For React 17+ new JSX transform
      "react/react-in-jsx-scope": "off", // For React 17+ new JSX transform
      "jsx-quotes": ["error", "prefer-double"], // Enforce double quotes in JSX
    },
  },
]
