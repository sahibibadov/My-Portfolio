// Flat config: ESLint 10 no longer reads `.eslintrc.json`, and Next 16 removed
// the `next lint` command, so linting goes through the eslint CLI directly.
import coreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "next-env.d.ts"],
  },
  ...coreWebVitals,
];

export default config;
