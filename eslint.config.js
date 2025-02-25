export default [
    {
      ignores: ["node_modules/", "dist/"], // Ignore unnecessary files
    },
    {
      files: ["**/*.js", "**/*.ts"],
      rules: {
        "no-unused-vars": "warn",
        "no-console": "off"
      }
    }
  ];
  